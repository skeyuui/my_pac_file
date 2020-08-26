function FindProxyForURL(url, host) {
    
    // use proxy for specific domains
    if (shExpMatch(host, "*blog*fc2*") ||
        shExpMatch(host, "*viz.com*")
       )
        return "PROXY p.webshare.io:20000";
    
    // by default use no proxy 
    return "DIRECT";
}
