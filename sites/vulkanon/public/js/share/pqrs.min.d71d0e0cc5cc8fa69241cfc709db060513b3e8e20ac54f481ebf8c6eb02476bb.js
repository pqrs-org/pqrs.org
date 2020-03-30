$(function(){$('.td-content a[href]').each(function(){const $this=$(this)
const href=$this.attr('href')
if(href.startsWith('http://')||href.startsWith('https://')){if(href.endsWith('.zip')||href.endsWith('.gz')||href.endsWith('.dmg')){return}
$this.attr('target','_blank')
$this.append($('<span>').addClass('fas fa-external-link-alt ml-1'))}})})