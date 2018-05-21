
var likes = 0;
var dislikes = 0;

$('.buttonlike').click(function(){
     likes++;
     $('#lblLikes').text(likes);
 });

$('.buttondislike').click(function(){
     dislikes++;
     $('#lblDislikes').text(dislikes);
 });

$('.buttonlike2').click(function(){
     likes++;
     $('#lblLikes2').text(likes);
 });

$('.buttondislike2').click(function(){
     dislikes++;
     $('#lblDislikes2').text(dislikes);
 });

$('.buttonlike3').click(function(){
     likes++;
     $('#lblLikes3').text(likes);
 });

$('.buttondislike3').click(function(){
     dislikes++;
     $('#lblDislikes3').text(dislikes);
 });


// Como mostrar e esconder uma div com o clique do botao ---------

// $('.nextl1').click(function(){
//     $("#book2").show();
//     $('#book1').hide();
//     $('#book3').hide();
//   });

// $('.nextd1').click(function(){
//     $("#book2").show();
//     $('#book1').hide();
//     $('#book3').hide();
//   });

// $('.nextl2').click(function(){
//     $("#book3").show();
//     $('#book2').hide();
//     $('#book1').hide();
//   });

// $('.nextd2').click(function(){
//     $("#book3").show();
//     $('#book2').hide();
//     $('#book1').hide();
//   });

// $('.nextl3').click(function(){
//     $("#book1").show();
//     $('#book3').hide();
//     $('#book2').hide();
//   });

// $('.nextd3').click(function(){
//     $("#book1").show();
//     $('#book3').hide();
//     $('#book2').hide();
//   });


// Como mostrar e esconder uma div com o clique do botao ---------

$('.book button').click(function(){
    var opinion = $(this).attr("data-Opinion");
    $current = $('.book.active');
    $next = $current.next();

    if($next.length == 0){
        // $next = $('.book').first();
        // $next = $('.book').eq(0);
        $next = $('.book:first-child');
    }

    $current.removeClass('active');
    $next.addClass('active');
});

var book1 = {
    name:"Equacao",
    ima:"images/livro1.jpeg",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link:{
        text:"",
        url:"",
    }
}
var book2 = {
    name:"Auschwitz",
    ima:"images/livro2.jpeg",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link:{
        text:"link",
        url:"",
    }
}
var book3 = {
    name:"Cozinha",
    ima:"images/livro3.jpeg",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link:{
        text:"",
        url:"",
    }
}

class Library{
    constructor(){
        this.books = [book1,book2,book3];
        this.seenBooks = [];
        this.Load(book1);
    }
    Load(book){
        $("h1").text(book.name);
        $("img").attr("src",book.ima);
        $("p").text(book.descricao);
        $("a").html(book.text);
        
        ///////////////////////////////////// funcao para dois links
        
        // book.links.forEach(function(v,i){
           // $(".book a").eq(i).text(v.text);
           // $(".book a").eq(i).attr("href",v.url); 
        //});
    }
    NextBook(){
        this.seenBooks.push(this.books[0]);
        this.books.splice(0,1);
        this.Load(this.books[0]);
    }
    
}

var lib = new Library();

$('.book button').click(function(){
    Library.NextBook();
});