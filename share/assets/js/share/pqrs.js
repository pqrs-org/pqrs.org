document.addEventListener('DOMContentLoaded', () => {
  // Set external link target

  document.querySelectorAll('.td-content a[href]').forEach((link) => {
    const href = link.getAttribute('href')
    if (
      href === null ||
      (!href.startsWith('http://') && !href.startsWith('https://')) ||
      href.endsWith('.zip') ||
      href.endsWith('.gz') ||
      href.endsWith('.dmg')
    ) {
      return
    }

    link.target = '_blank'
    link.rel = 'noopener'

    const icon = document.createElement('span')
    icon.className = 'fas fa-external-link-alt ms-1'
    link.append(icon)
  })

  const supportersOuter = document.getElementById('supporters')
  const supportersSpinner = document.getElementById('supporters-spinner')
  if (supportersOuter === null) {
    return
  }

  const fadeOut = (element) => {
    if (element === null) {
      return
    }

    element.style.transition = 'opacity 500ms'
    element.style.opacity = '0'
    window.setTimeout(() => {
      element.hidden = true
    }, 500)
  }

  const createSupportersGroup = () => {
    const group = document.createElement('div')
    group.className = 'supporters'
    return group
  }

  fetch('https://pqrs.org/supporters/supporters.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      return response.json()
    })
    .then((sponsors) => {
      fadeOut(supportersSpinner)

      let supporters = createSupportersGroup()
      let scale = null

      sponsors.forEach((sponsor) => {
        if (scale !== null && sponsor.avatar.scale !== scale) {
          supportersOuter.append(supporters)
          supporters = createSupportersGroup()
        }
        scale = sponsor.avatar.scale

        const name = sponsor.name !== '' ? sponsor.name : sponsor.login

        const image = document.createElement('img')
        image.src = sponsor.avatar.url
        image.alt = name
        Object.assign(image.style, {
          width: `${80 * sponsor.avatar.scale}px`,
          maxWidth: '100%',
        })

        const paddingY = `${10 * sponsor.avatar.scale}px`
        const paddingX = `${5 * sponsor.avatar.scale}px`
        const link = document.createElement('a')
        link.href = `https://github.com/${sponsor.login}`
        link.target = '_blank'
        link.rel = 'noopener'
        Object.assign(link.style, {
          width: `${100 * sponsor.avatar.scale}px`,
          maxWidth: 'calc(100vw - 80px)',
          padding: `${paddingY} ${paddingX}`,
        })
        link.append(image)

        const login = document.createElement('div')
        login.textContent = `@${sponsor.login}`
        link.append(login)

        const sponsorName = document.createElement('div')
        if (sponsor.name !== '') {
          sponsorName.textContent = sponsor.name
        } else {
          sponsorName.style.height = '15px'
        }
        link.append(sponsorName)

        switch (scale) {
          case 4:
            link.style.fontSize = '20px'
            break
          case 2:
            link.style.fontSize = '16px'
            break
        }

        if (sponsor.tier >= 40) {
          link.classList.add('gold')
        } else if (sponsor.tier >= 20) {
          link.classList.add('silver')
        }

        supporters.append(link)
      })

      supportersOuter.append(supporters)
    })
    .catch(() => {
      fadeOut(supportersSpinner)

      const alert = document.createElement('div')
      alert.className = 'alert alert-danger'
      alert.textContent = 'Error: Failed to fetch the sponsors list.'
      supportersOuter.append(alert)
    })
})
