function calcularEquilibrio() {
    // Captura os valores dos inputs do HTML
    const prod = parseFloat(document.getElementById('producao').value);
    const tec = parseFloat(document.getElementById('tecnologia').value);
    const pres = parseFloat(document.getElementById('preservacao').value);

    // Cálculo dos impactos
    let ganhoPotencial = (prod * 1.5) + (tec * 1.2);

    let saudeAmbiental = 100 - (prod * 0.8) + (tec * 0.5) + (pres * 0.6);

    // Limita entre 0% e 100%
    saudeAmbiental = Math.min(Math.max(saudeAmbiental, 0), 100);

    // Penalidade econômica por degradação ambiental
    if (saudeAmbiental < 30) {
        ganhoPotencial = ganhoPotencial * (saudeAmbiental / 100);
    }

    // Atualiza os indicadores
    document.getElementById('val-economico').innerText =
        `R$ ${(ganhoPotencial * 120).toFixed(0)}`;

    document.getElementById('val-ambiental').innerText =
        `${saudeAmbiental.toFixed(0)}%`;

    // Elementos de feedback
    const painelStatus = document.getElementById('status-painel');
    const textoFeedback = document.getElementById('feedback');

    // Diagnóstico
    if (saudeAmbiental >= 60 && ganhoPotencial >= 70) {
        painelStatus.innerText = "🌱 Agro Forte & Sustentável";
        painelStatus.className = "status-indicator status-equilibrio";

        textoFeedback.innerText =
            "Excelente! Sua propriedade alcançou o equilíbrio ideal. A alta produtividade aliada às tecnologias verdes e à preservação ambiental garante lucro e sustentabilidade.";

    } else if (saudeAmbiental < 40) {
        painelStatus.innerText = "⚠️ Colapso Ambiental";
        painelStatus.className = "status-indicator status-alerta";

        textoFeedback.innerText =
            "Alerta! A produção intensiva sem práticas sustentáveis está degradando os recursos naturais. No futuro, a produtividade poderá ser comprometida.";

    } else if (ganhoPotencial < 50) {
        painelStatus.innerText = "📉 Baixa Eficiência Econômica";
        painelStatus.className = "status-indicator status-alerta";

        textoFeedback.innerText =
            "O meio ambiente está protegido, mas o retorno financeiro é baixo. Considere investir mais em tecnologias sustentáveis para aumentar a eficiência.";

    } else {
        painelStatus.innerText = "⚖️ Em Ajuste de Equilíbrio";
        painelStatus.className = "status-indicator status-equilibrio";

        textoFeedback.innerText =
            "A propriedade apresenta resultados razoáveis, mas ainda há espaço para melhorias. Ajuste a produção e amplie o uso de tecnologias verdes.";
    }
}

// Inicializa os dados ao carregar a página
window.onload = calcularEquilibrio;