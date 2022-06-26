

const { log } = console;


/*
 *  The function called when this package is loaded
 */

export async function activate(pack){
    
    /*
     *  Pack : The object representing this package.
     */
    
    
    
    /*
     *  Package ID
     *  Format: <Owner>:<Repository>
     *  Example: daetonpackages:file-icons
     */
    
    log(pack.id);
    
    
    
    /*   Paths   */ {
    
        const { paths } = pack;
        
        /*
         *  Source folder
         *  -> ~/.Daeton/Packages/<Package>/
         */
         
        log(paths.source);
        
        /*
         *  Config folder
         *  -> ~/.Daeton/Configuratitons/<Package>/
         */
         
        log(paths.configs);
        
        /*
         *  Path to this file
         */
         
        log(paths.activate);
    }
    
    
    
    /*   Configs   */ {
    
        const { configs } = pack;
        
        /*
         *  Ensures that the config file exists
         */
        
        await configs.ensure('Config Name.yaml',`
            Default content to be written if the config file doesn't exist.
        `);
    }
    
    
    
    /*   Info   */ {
    
        const { info } = pack;
        
        /*
         *  Display name of the package.
         */
         
        log(info.title);
        
        /*
         *  Short description of the package.
         */
         
        log(info.description);
        
        /*
         *  License of the package repository.
         */
         
        log(info.license);
        
        /*
         *  Version of the package.
         */
         
        log(info.version);
        
        /*
         *  Owner of the package repository
         */
         
        log(info.owner);
        
        /*
         *  Name of the package repository
         */
         
        log(info.repository);
    }
}

