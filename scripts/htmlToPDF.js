form = $('#pdfContent');
cache_width = form.width(),
    a4 = [595.28, 841.89]; // for a4 size paper width and heights

function pdfFromHTML() {
        $('body').scrollTop(0);
        /*var pdf = new jsPDF('p', 'pt', 'letter');
        specialElementHandlers = {
            '#bypassme': function (element, renderer) {
                return true;
            }
        };

        var margins = {
            top: 80,
            bottom: 60,
            left: 40,
            width: 522
        };
        var content = $('#pdfContent').get(0);
        pdf.fromHTML(
            content,
            margins.left,
            margins.top, {
                'width': margins.width,
                'elementHandlers': specialElementHandlers
            });

        pdf.save("dataurlnewwindow");
        */
        getCanvas().then(function (canvas) {
            var
                img = canvas.toDataURL("image/png"),
                doc = new jsPDF({
                    unit: 'px',
                    format: 'a4'
                });
            doc.addImage(img, 'JPEG', 20, 20);
            doc.save('techumber-html-to-pdf.pdf');
            form.width(cache_width);
        });
    }
    // create canvas object
function getCanvas() {
    form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
    return html2canvas(form, {
        imageTimeout: 2000,
        removeContainer: true
    });
}