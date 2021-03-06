Class('JooseIt.Widget.Header', {
    
    use : [ 'nonjoose://Raphael', 'JooseIt.Control.NavigationButton' ],
    
    
    isa : Ext.Container,
    
    
    has : {
        style                   : 'position : relative',
        
        canvas                  : null,
        
        buttons                 : Joose.I.Object,
        
        activeButton            : null
    },
    
    
    after : {
        
        onRender : function (ct, position) {
            var canvas = this.canvas = Raphael(this.el.dom, '100%', '100%')
            
            var buttons         = this.buttons
            
            var title           = canvas.image(JooseIt().pathToStatic('images/logo.png'), 352, 10, 276, 50)
            
            
            var urls            = JOOSE_IT_BUTTONS[Ext.isIE ? 'MHTML' : 'DATAURI']
            
            
            buttons.home        = new JooseIt.Control.NavigationButton({
                src         : urls.home.src,
                activeSrc   : urls.home.activeSrc,
                
                dispatchTo  : '/home',
                
                left        : 45,
                top         : 50,
                
                rotation    : 20,
                
                canvas      : canvas
            })

            
            buttons.about       = new JooseIt.Control.NavigationButton({
                src         : urls.about.src,
                activeSrc   : urls.about.activeSrc,
                
                dispatchTo  : '/about',
                
                left        : 215,
                top         : 90,
                
                rotation    : -18,
                
                canvas      : canvas
            })            
            
            
            buttons.download    = new JooseIt.Control.NavigationButton({
                src         : urls.download.src,
                activeSrc   : urls.download.activeSrc,
                
                dispatchTo  : '/download',
                
                left        : 385,
                top         : 110,
                
                rotation    : 0,
                
                canvas      : canvas
            })
            
            
            buttons.forum       = new JooseIt.Control.NavigationButton({
                src         : urls.forum.src,
                activeSrc   : urls.forum.activeSrc,
                
                dispatchTo  : function () {
                    window.location = '/forum'
                },
                
                left        : 555,
                top         : 90,
                
                rotation    : 21,
                
                canvas      : canvas
            })
            
            
            buttons.resources       = new JooseIt.Control.NavigationButton({
                src         : urls.resources.src,
                activeSrc   : urls.resources.activeSrc,
                
                dispatchTo  : '/resources',
                
                left        : 725,
                top         : 40,
                
                rotation    : -20,
                
                canvas      : canvas
            })
            
            buttons.about.self.insertBefore(buttons.home.self)
            
            if (this.activeButton) {
                var activeButton = this.activeButton = buttons[this.activeButton]
                activeButton.activate()
            }
            

            Joose.O.each(this.buttons, function (button) {
                button.on('mouseover', this.backscaleButtonsExcept, this)
                
                button.on('mouseout', this.restoreAllScales, this)
            }, this)
        }
        
    },
    
    
    methods : {
        
        backscaleButtonsExcept : function (button) {
            Joose.O.each(this.buttons, function (otherButton) {
                if (otherButton != button) otherButton.backscale()
            })
        },
        
        
        restoreAllScales : function () {
            Joose.O.each(this.buttons, function (button) {
                button.restoreScale()
            })
        },
        
        
        setActivePage : function (pageId) {
            if (!this.rendered) {
                this.activeButton = pageId
                
                return
            }
            
            if (this.activeButton) this.activeButton.deactivate()
            
            this.activeButton = this.buttons[pageId]
            
            this.activeButton.activate()
        }
        
    }
    
})