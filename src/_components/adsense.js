import componentManager from "/controllers/componentManager";

export function adsense(adClient, adFormat, adSlot, fullWidthResponsive = false) {
    componentManager.createScriptSrc('script-adsense', `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`, 'anonymous');

    const html = `
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-format="${adFormat}"
            data-ad-client="${adClient}"
            data-ad-slot="${adSlot}"
            data-full-width-responsive="${fullWidthResponsive}">
        </ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    `;

    return componentManager.removeLineBreaks(html);
}