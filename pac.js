function FindProxyForURL(url, host) {
    
    // use proxy for specific domains
    if (shExpMatch(host, "*blog.fc2*") ||
        shExpMatch(host, "*viz.com*")
       )
        return "PROXY 108.61.132.121:8080";
    
    // by default use no proxy
    return "DIRECT";
}
