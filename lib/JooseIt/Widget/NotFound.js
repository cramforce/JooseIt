Class('JooseIt.Widget.NotFound', {
    
    use : [ 'nonjoose://Raphael', 'JooseIt.Control.NavigationButton' ],
    
    
    isa             : 'SymbieX.Template.Shotenjin.Container',
    
    does            : 'Symbie.Widget',
    

    have : {
        templateSources         : {
            /*tj
                <div>Sorry, this page is missing</div>
                <div class="nav_button"></div>
            tj*/

            /* GENERATED BY SHOTENJIN.JOOSED HELPER, DO NOT MODIFY DIRECTLY */
            sources : '<div>Sorry, this page is missing</div>\n<div class="nav_button"></div>'
        },
        
        canvas                  : null
    },
    
    
    before : {
        
        initComponent : function () {
            
            Ext.apply(this, {
                
                cls : 'JooseIt-Widget-NotFound',
                
                width : 500,
                height : 350,
                
                
                buttons : [
                    {
                        text : 'Go back',
                        
                        handler : function () {
                            history.go(-1)
                        }
                    }
                ],
                
                buttonAlign : 'center'
            })
        }
        //eof initComponent
    },
    
    
    after : {
        
        onRender : function (ct, position) {
            var canvas = this.canvas = Raphael(this.el.child('.nav_button').dom, 500, 350)
            
            var urls            = JOOSE_IT_BUTTONS[Ext.isIE ? 'MHTML' : 'DATAURI']
            
            var button = new JooseIt.Control.NavigationButton({
                src         : urls['go-back'].src,
                activeSrc   : urls['go-back'].activeSrc,
                
                dispatchTo  : function () {
                    history.go(-1)
                },
                
                left        : 140,
                top         : 10,
                
                rotation    : 5,
                
                canvas      : canvas
            })
            
            button.on('mouseover', button.activate, button)

            button.on('mouseout', button.deactivate, button)
            button.on('mouseout', button.restoreScale, button)
        }
    }
    
    
})