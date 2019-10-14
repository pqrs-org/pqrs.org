;(function($) {
  'use strict'

  $(function() {
    const $searchInput = $('#search-input')

    //
    // Options for popover
    //

    $searchInput.data('html', true)
    $searchInput.data('placement', 'bottom')

    //
    // Lunr
    //

    let idx = null
    const resultDetails = []

    $.ajax('/lunr.json').then(data => {
      idx = lunr(function() {
        this.ref('ref')
        this.field('title')
        this.field('excerpt')
        this.field('body')

        data.forEach(function(doc) {
          this.add(doc)
          resultDetails[doc.ref] = {
            title: doc.title,
            excerpt: doc.excerpt
          }
        }, this)

        $searchInput.trigger('change')
      })
    })

    const render = () => {
      $searchInput.popover('dispose')

      const searchQuery = $searchInput.val()
      if (searchQuery === '') {
        return
      }

      const html = $('<div>')

      if (idx === null) {
        return
      }
      const searchResults = idx.query(q => {
        lunr.tokenizer(searchQuery.toLowerCase()).forEach(token => {
          const queryString = token.toString()
          q.term(queryString, {
            boost: 100
          })
          q.term(queryString, {
            wildcard:
              lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
            boost: 10
          })
          q.term(queryString, {
            editDistance: 2
          })
        })
      })

      if (searchResults.length === 0) {
        html.append($('<p>').text('No results found for query "' + q + '"'))
      } else {
        searchResults.slice(0, 4).forEach(r => {
          const $cardHeader = $('<div>').addClass('card-header')
          $cardHeader.append(
            $('<a>')
              .attr('href', r.ref)
              .text(resultDetails[r.ref].title)
          )

          const $cardBody = $('<div>').addClass('card-body')
          $cardBody.append(
            $('<p>')
              .addClass('card-text text-muted search-result-excerpt')
              .text(
                _.truncate(resultDetails[r.ref].excerpt, {
                  length: 100,
                  separator: ' '
                })
              )
          )

          const $card = $('<div>').addClass('card')
          $card.append($cardHeader).append($cardBody)

          html.append($card)
        })
      }

      $('.td-search-input')
        .data('content', html.html())
        .popover('dispose')
        .popover('show')
    }

    //
    // Register handler
    //

    $searchInput.on('change', () => {
      render()
    })
  })
})(jQuery)
