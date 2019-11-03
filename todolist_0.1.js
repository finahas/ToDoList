
    $('input').keypress(function(key){
        if(key.keyCode === 13){
            var task = $('input').val();
            //$('input').val("");
            $('ul').append('<li>' + task + '<span><i class="trash icon"</i></span>');
        }
    });
    
    $('ul').on('click','span', function(){
        $(this).parent().fadeOut(400,function(){
            $(this).remove();
        });
    })    
        
    $('ul').on('click','li',function(){
        $(this).toggleClass('done');
    });
