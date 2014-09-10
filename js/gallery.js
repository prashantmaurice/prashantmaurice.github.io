function gallery(){
            $('#dog1').click(function() { bootbox.alert('<img src="images/dog1.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
            $('#cat1').click(function() { bootbox.alert('<img src="images/cat1.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
            $('#bird1').click(function() { bootbox.alert('<img src="images/bird1.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
            $('#dog2').click(function() { bootbox.alert('<img src="images/dog2.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
            $('#cat2').click(function() { bootbox.alert('<img src="images/cat2.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
            $('#bird2').click(function() { bootbox.alert('<img src="images/bird2.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
            $('#dog3').click(function() { bootbox.alert('<img src="images/dog3.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
            $('#cat3').click(function() { bootbox.alert('<img src="images/cat3.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
            $('#bird3').click(function() { bootbox.alert('<img src="images/bird3.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
            $('#dog4').click(function() { bootbox.alert('<img src="images/dog4.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
            $('#cat4').click(function() { bootbox.alert('<img src="images/cat4.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
            $('#bird4').click(function() { bootbox.alert('<img src="images/bird4.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
            $('#dog5').click(function() { bootbox.alert('<img src="images/dog5.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
            $('#cat5').click(function() { bootbox.alert('<img src="images/cat5.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
            $('#bird5').click(function() { bootbox.alert('<img src="images/bird5.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
        }
    var $itemsHolder = $('ul.thumbnails');
    var $itemsClone = $itemsHolder.clone(); 
    var $filterClass = "";
    $('ul.filter li').click(function(e) {
    e.preventDefault();
    $filterClass = $(this).attr('data-value');
        if($filterClass == 'all'){ var $filters = $itemsClone.find('li'); }
        else { var $filters = $itemsClone.find('li[data-type='+ $filterClass +']'); }
        $itemsHolder.quicksand(
          $filters,
          { duration: 1000 },
          gallery
          );
    });
    
    $(document).ready(gallery);
    //$(document).ready(gallery);

