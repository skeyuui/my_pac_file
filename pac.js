function FindProxyForURL(url, host) {
    // use proxy for specific domains
    
    if (shExpMatch(host, "fc2.com")){
        alert(host + " foi por host = fc2.com");
        return "PROXY 167.71.91.204:8080";
    }
    
    if (shExpMatch(host, "*fc2.com*")){
        alert(host + " foi por host = *fc2.com*");
        return "PROXY 167.71.91.204:8080";
    }
    
    if (shExpMatch(host, "*fc2*")){
        alert(host + " foi por host = *fc2");
        return "PROXY 167.71.91.204:8080";
    }
    // by default use no proxy 
    return "DIRECT";
}
