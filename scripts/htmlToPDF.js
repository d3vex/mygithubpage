function demoFromHTML(id, name) {
        var pdf = new jsPDF('p', 'pt', 'letter');
        
        specialElementHandlers = {
            '#bypassme': function (element, renderer) {
                return true;
            }
        };
        
        margins = {
            top: 80,
            bottom: 60,
            left: 40,
            width: 522
        };
    
        pdf.fromHTML(
            $('#' + id).html(),
            margins.left,
            margins.top, {
                'width': margins.width,
                'elementHandlers': specialElementHandlers
            },

            function (dispose) {
                pdf.save(name);
            }, margins);
    }