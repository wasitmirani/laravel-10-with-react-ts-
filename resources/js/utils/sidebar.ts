

class SidebarMenu {


    setSingleMenu= (title:string,icon:string,route:string,can?:string)=>{
        return {
            "title": title,
            "type": 'single',
            "icon": icon,
            "route": route,
            "can": can,
          }
    }
    setMultiMenu=(title:string,icon:string,can?:string)=>{
        return {
            "title": title,
            "can": can,
            "icon": icon,
            "type": "multi",
            "sub_menu": [], // Initialize an empty array for sub-menu
        }
    }
    setSubMenu=(title:string,route:string,can?:string)=>{
      return { 
        "title":title,
        "route": route,
        "can": can,
      }
    }
    setHeadingMenu=(title:string)=>{
        return {
            "title":title,
        }
    }
    getMenuList = () => {
        return [

            this.setHeadingMenu('MENU'),
            this.setMultiMenu('Dashboard', 'dashboard', 'somePermission'),
            {
                "sub_menu": [
                    this.setSubMenu('Dashboard', '/overview/dashboard', 'somePermission'),
                    // Add more sub-menu items as needed
                ],
            },

            this.setMultiMenu('Dashboard2', 'dashboard2', 'somePermission'),
            {
                "sub_menu": [
                    this.setSubMenu('Dashboard', '/overview/dashboard', 'somePermission'),
                    // Add more sub-menu items as needed
                ],
            },
              
           
        ];
    }

}

export default SidebarMenu;