Class('JooseIt.Widget.About', {
    
    isa : 'SymbieX.Template.Shotenjin.Container',
    
    does : [ 'Symbie.Widget', 'JooseIt.Widget.PageReport' ],

    
    have : {
        pageId                  : 'about',
        
        autoHeight              : true,
        
        templateSources         : {
            /*tj:../../../content/About.html
                <h1 id="versions">VERSIONS</h1>
                
                <p>Joose is currently presented with 2 major releases: Joose2 and Joose3</p>
                
                <h2 id="joose2">Joose2</h2>
                
                <p>Joose2 is a stable, feature-rich and proven-to-work system. It is in production on several multi M$ sites (in both visitors and revenue), like:</p>
                
                <p><a href="http://www.tuifly.com/">http://www.tuifly.com/</a></p>
                
                <p><a href="http://www.mirapodo.de/">http://www.mirapodo.de/</a></p>
                
                <h2 id="joose3">Joose3</h2>
                
                <p>Joose3 is currently most active developing version of Joose. Its already stable with about 600 unit tests, though it may miss some features, 
                presented in Joose2 (like type system, serialization and Google Gears support). </p>
                
                <p>Instead of that Joose3 offers some other features, like roles implementation based on 
                <a href="http://www.iam.unibe.ch/~scg/Research/Traits/">original traits spec</a>, improved namespaces, better meta-roles support and <a href="http://openjsan.org/go/?l=Joose.Manual.Mutability">mutability</a>.</p>
                
                <p>Joose3 is also distributing via OpenJSAN platform, which establish a distribution standard and provides installation tools.</p>
            tj*/

            /* GENERATED BY SHOTENJIN.JOOSED HELPER, DO NOT MODIFY DIRECTLY */
            sources : '<h1 id="versions">VERSIONS</h1>\n<p>Joose is currently presented with 2 major releases: Joose2 and Joose3</p>\n<h2 id="joose2">Joose2</h2>\n<p>Joose2 is a stable, feature-rich and proven-to-work system. It is in production on several multi M$ sites (in both visitors and revenue), like:</p>\n<p><a href="http://www.tuifly.com/">http://www.tuifly.com/</a></p>\n<p><a href="http://www.mirapodo.de/">http://www.mirapodo.de/</a></p>\n<h2 id="joose3">Joose3</h2>\n<p>Joose3 is currently most active developing version of Joose. Its already stable with about 600 unit tests, though it may miss some features,\npresented in Joose2 (like type system, serialization and Google Gears support). </p>\n<p>Instead of that Joose3 offers some other features, like roles implementation based on\n<a href="http://www.iam.unibe.ch/~scg/Research/Traits/">original traits spec</a>, improved namespaces, better meta-roles support and <a href="http://openjsan.org/go/?l=Joose.Manual.Mutability">mutability</a>.</p>\n<p>Joose3 is also distributing via OpenJSAN platform, which establish a distribution standard and provides installation tools.</p>'
        }
    }
    
})