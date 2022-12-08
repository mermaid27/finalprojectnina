'use.strict'
let data = [
    { Id : 1, 
    imageUrl :('../https://images.ctfassets.net/kdawwlsweh27/73v8l2HnjGv3e5UmXFwUMc/39b2c778ed19774255d895ac4ee0ff9e/home-hero-banner-image.png'), 
    title : 'WE ARE AT YOUR SERVICE WITH OUR FAST, HIGHT-QUALITY, COMPETITIVLY PRICED TRANSLATION SOLUTIONS.', }, 

    
    { Id : 2, 
    imageUrl : ('../https://farm4.staticflickr.com/3914/15118079089_489aa62638_b.jpg'),
    title : 'OVER 25 YEARS OF EXPERIENCE', }, 

    { Id : 3, 
    imageUrl: ('../styles/images/techno-map.jpg'), 
    title : 'OVER 100 LANGUAGE PAIRS', }

    
];

let arrowLeft = document.getElementById ('arrow-left');
let arrowRight = document.getElementById ('arrow-right');
let sliderContent = document.getElementById ('slider-content');
let sliderIndex = 0; 


function createDivTag() {
    const DivTag = document.createElement('div'); 
    DivTag.classList.add('slide'); 
    return DivTag;  
}

function createImageTag(item) {
    const tagImage = document.createElement('image'); 
    tagImage.setAttribute('src', item.imageUrl); 
    tagImage.setAttribute('alt', item.title); 
    
    return tagImage; 
}

function createTitleTag(item) {
    const tagTitle = document.createElement('h3'); 
    tagTitle.textContent = item.title ; 
    
    return tagTitle; 
}

function slide() {
    sliderContent.innerHTML = " "; 
    const slideItem = createDivTag(data[sliderIndex]);
    const ImgTag = createImageTag(data[sliderIndex]);
    const titleTag = createTitleTag(data[sliderIndex]);
    
    slideItem.appendChild(ImgTag); 
    slideItem.appendChild(titleTag); 
    sliderContent.appendChild(slideItem); 

}
arrowLeft.addEventListener('click', function() {
    sliderIndex--; 
    
    slide();
}) 
arrowRight.addEventListener('click', function() {
    sliderIndex++; 
    slide();
}) 




slide()




var splide = new Splide( '.splide' );
splide.mount();  








