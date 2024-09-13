"use client"

import { useEffect } from 'react';

function BootstrapClient() {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    require('@/public/loader.js');
    require('@/public/assets/js/config.js');
    require('@/public/assets/js/script.js');
    
  }, []);

  return null;
}

export default BootstrapClient;