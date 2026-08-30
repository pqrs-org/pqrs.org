document.addEventListener('DOMContentLoaded', () => {
  // When the URL fragment points to a heading, highlight the section from that
  // heading to the next heading at the same or a higher level. The highlight is
  // positioned between the sidebar and the content without changing the
  // document structure, and is recalculated when the URL or page layout changes.

  let fragmentSectionHighlight = null
  let highlightedContent = null
  let contentResizeObserver = null

  const updateFragmentSectionHighlight = () => {
    let id = window.location.hash.slice(1)
    try {
      id = decodeURIComponent(id)
    } catch (_) {
      // Use the undecoded fragment if it contains an invalid escape sequence.
    }

    const target = id === '' ? null : document.getElementById(id)
    const headingLevel = target?.tagName.match(/^H([1-6])$/)?.[1]
    const content = target?.closest('.td-content')

    if (headingLevel === undefined || content === null) {
      fragmentSectionHighlight?.remove()
      fragmentSectionHighlight = null
      contentResizeObserver?.disconnect()
      contentResizeObserver = null
      highlightedContent = null
      return
    }

    if (content !== highlightedContent) {
      contentResizeObserver?.disconnect()
      highlightedContent = content

      if ('ResizeObserver' in window) {
        contentResizeObserver = new ResizeObserver(
          updateFragmentSectionHighlight
        )
        contentResizeObserver.observe(content)
      }
    }

    const headings = Array.from(
      content.querySelectorAll('h1, h2, h3, h4, h5, h6')
    )
    const targetIndex = headings.indexOf(target)
    const boundary = headings
      .slice(targetIndex + 1)
      .find((heading) => Number(heading.tagName.slice(1)) <= headingLevel)

    const contentRect = content.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const sectionBottom = boundary
      ? boundary.getBoundingClientRect().top
      : contentRect.bottom
    const rootFontSize = Number.parseFloat(
      window.getComputedStyle(document.documentElement).fontSize
    )
    const sidebar = content.closest('.td-main')?.querySelector('.td-sidebar')
    const sidebarRect = sidebar?.getBoundingClientRect()
    const highlightLeft =
      sidebarRect && sidebarRect.right < contentRect.left
        ? (sidebarRect.right + contentRect.left) / 2 - rootFontSize * 0.125
        : contentRect.left - rootFontSize

    if (fragmentSectionHighlight === null) {
      fragmentSectionHighlight = document.createElement('div')
      fragmentSectionHighlight.className = 'fragment-section-highlight'
      fragmentSectionHighlight.setAttribute('aria-hidden', 'true')
      document.body.append(fragmentSectionHighlight)
    }

    Object.assign(fragmentSectionHighlight.style, {
      top: `${window.scrollY + targetRect.top}px`,
      left: `${window.scrollX + highlightLeft}px`,
      height: `${Math.max(sectionBottom - targetRect.top, targetRect.height)}px`,
    })
  }

  updateFragmentSectionHighlight()
  window.addEventListener('hashchange', updateFragmentSectionHighlight)
  window.addEventListener('load', updateFragmentSectionHighlight)
  window.addEventListener('resize', updateFragmentSectionHighlight)
})
