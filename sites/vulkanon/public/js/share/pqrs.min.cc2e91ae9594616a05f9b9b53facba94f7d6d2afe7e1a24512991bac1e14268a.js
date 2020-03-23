$(function(){$('.td-content a[href]').each(function(){const $this=$(this)
const href=$this.attr('href')
if(href.startsWith('http://')||href.startsWith('https://')){$this.attr('target','_blank')
$this.append($('<span>').addClass('fas fa-external-link-alt ml-1'))}})})