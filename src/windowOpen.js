function openWindow(url){

    const newTab = window.open();
    newTab.opener = null; //opener 会有漏洞
    newTab.location = url;
}

