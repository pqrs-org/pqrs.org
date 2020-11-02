$(function () {
  const $sponsorsOuter = $('#sponsors')
  if ($sponsorsOuter.length > 0) {
    $.ajax('https://pqrs.org/sponsors/sponsors.json').then((response) => {
      let $sponsors = $('<div>').addClass('sponsors')

      let scale = null
      response.forEach((sponsor) => {
        if (scale !== null && sponsor.avatar.scale !== scale) {
          $sponsorsOuter.append($sponsors)
          $sponsors = $('<div>').addClass('sponsors')
        }
        scale = sponsor.avatar.scale

        const name = sponsor.name !== '' ? sponsor.name : sponsor.login
        const $img = $('<img>')
          .attr('src', sponsor.avatar.url)
          .attr('alt', name)
          .attr('title', name)
          .attr('width', 80 * sponsor.avatar.scale)
        const $a = $('<a>')
          .attr('href', 'https://github.com/' + sponsor.login)
          .attr('target', '_blank')
          .append($img)
        $sponsors.append($a)
      })

      $sponsorsOuter.append($sponsors)
    })
  }
})
