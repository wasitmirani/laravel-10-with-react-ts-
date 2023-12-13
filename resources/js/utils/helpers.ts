class Helper {
    static loadHomeScripts = (): void => {
      const scriptList = [
        '/assets/js/app.js',
      ];
  
      scriptList.forEach((scriptUrl, index) => {
        setTimeout(() => {
          const script = document.createElement('script');
          script.src = scriptUrl;
          document.head.appendChild(script);
        }, index * 200); // Adjust the delay as needed
      });
    };
  }
  
  export default Helper;
  