(function() {
    'use strict';
    
    console.log('[shim] WeatherLayers export helper loading...');
    
    function waitForWeatherLayers() {
        if (window.WeatherLayers) {
            console.log('[shim] WeatherLayers found, checking exports...');
            
            const expectedClasses = ['ParticleLayer', 'RasterLayer', 'ContourLayer', 'HighLowLayer', 'FrontLayer', 'GridLayer'];
            
            expectedClasses.forEach(className => {
                if (window.WeatherLayers[className]) {
                    console.log(`[shim] ✓ WeatherLayers.${className} available`);
                } else {
                    console.warn(`[shim] ✗ WeatherLayers.${className} NOT found`);
                }
            });
            
            if (!window.WeatherLayers.ParticleLayer && window.WeatherLayers.default) {
                console.log('[shim] Trying to extract from .default export...');
                Object.assign(window.WeatherLayers, window.WeatherLayers.default);
            }
            
            console.log('[shim] WeatherLayers structure:', Object.keys(window.WeatherLayers));
            
        } else {
            setTimeout(waitForWeatherLayers, 100);
        }
    }
    
    waitForWeatherLayers();
    
})();
