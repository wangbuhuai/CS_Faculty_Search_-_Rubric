// Created by Dayu Wang (dwang@stchas.edu) on 2021-12-16

// Last updated by Dayu Wang (dwang@stchas.edu) on 2023-03-06


$(function() {
    $("#save").click(function() {
        let applicantName = $("#candidate-name").val().trim();
        if (applicantName === "" || applicantName == null) {
            alert("Error: Application name is a MUST.");
            return;
        }
        let element = document.getElementById("output");
        let opt = {
            margin: [0.25, 0.25, 0.25, 0.25],
            filename: (applicantName + "_-_Application_Evaluation.pdf").replace(" ", "_"),
            image: { type: "jpeg", quality: 0.95 },
            html2canvas: {
                dpi: 600,
                letterRendering: true,
                useCORS: true
            },
            jsPDF: { unit: "in", format: "letter", orientation: "landscape" }

        };
        html2pdf(element, opt);
    });
});

$(function() {
   $("input[type='radio']").click(function() {
       let totalScore = 0;
       $("input[type='radio']:checked").each(function() {
           totalScore += parseInt($(this).attr("class"));
       });
       $("#total").text(totalScore.toString());
   });
});