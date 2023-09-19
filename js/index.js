// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
// MESSAGES NOTIFICATION
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const allMessages = document.querySelectorAll('.message');
const messageSearch = document.getElementById('message-search');

// THEME
const theme = document.getElementById('theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');
const backgroundPallete = document.querySelectorAll('.choose-bg div');


// SIDE BAR

// remove active class from all menu items
const changeActiveItem = ()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// MESSAGES
// Searching Chats
const searchMessage = ()=>{
    const val = messageSearch.value.toLowerCase();
    allMessages.forEach(chat=>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val)!=-1) {
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}

// Search Chat
messageSearch.addEventListener('keyup',searchMessage);

messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },2000);
})


// THEME CUSTOMIZATION

// open modal
const openThemeModal = ()=>{
    themeModal.style.display = 'grid';
}
// close modal
const closeThemeModal = (e)=>{
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

theme.addEventListener('click',openThemeModal);
themeModal.addEventListener('click',closeThemeModal);


// font sizes
const removeSizeSelector = ()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size=>{
    
    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left','-10rem');
            root.style.setProperty('--sticky-top-right','-33rem');
        }
    
        document.querySelector('html').style.fontSize = fontSize;
    })
})

//primary color
const removeColorSelector = ()=>{
    colorPallete.forEach(color=>{
        color.classList.remove('active');
    })
}

colorPallete.forEach(color=>{
    
    color.addEventListener('click',()=>{
        removeColorSelector();
        let primaryHue;
        color.classList.add('active');
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
    
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

// background color
const removeBackgroundColorSelector = ()=>{
    backgroundPallete.forEach(bg=>{
        bg.classList.remove('active');
    })
}

backgroundPallete.forEach(bg=>{
    
    bg.addEventListener('click',()=>{
        removeBackgroundColorSelector();
        let dark_color_lightness;
        let light_color_lightness;
        let white_color_lightness;
        bg.classList.add('active');
        if (bg.classList.contains('bg-1')) {
            dark_color_lightness = '17%';
            light_color_lightness='95%';
            white_color_lightness = '100%';
        }else if (bg.classList.contains('bg-2')) {
            dark_color_lightness = '95%';
            light_color_lightness='15%';
            white_color_lightness = '20%';
        }else if (bg.classList.contains('bg-3')) {
            dark_color_lightness = '95%';
            light_color_lightness='0%';
            white_color_lightness = '10%';
        }
    
        root.style.setProperty('--dark-color-lightness',dark_color_lightness);
        root.style.setProperty('--light-color-lightness',light_color_lightness);
        root.style.setProperty('--white-color-lightness',white_color_lightness);


    })
})
