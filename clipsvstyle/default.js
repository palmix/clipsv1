$('starts').each(function(){$(this).replaceWith("<noscript>"+$(this).html()+"</noscript>")});$('noscript').each(function(){$(this).remove()});
