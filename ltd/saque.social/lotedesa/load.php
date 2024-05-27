

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Loading Animation</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1MEXMCNKJX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1MEXMCNKJX');
</script>
    <style>
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 25px;
        }
        .checkpoints {
            display: flex;
            align-items: center;
        }
        .point {
            width: 30px;
            height: 30px;
            background-color: #D9D9D9;
            border-radius: 50%;
            position: relative;
        }
        .point::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background-color: #2563EB;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 4s ease-in-out, height 4s ease-in-out;
        }
        .point.active::after {
            width: 15px;
            height: 15px;
            transition: width 4s ease-in-out, height 4s ease-in-out;
        }
        .line {
            height: 4px;
            background-color: #D9D9D9;
            width: 50px;
            position: relative;
        }
        .line::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 4px;
            width: 0;
            background-color: #2563EB;
        }
        .line.active::after {
            width: 100%;
            transition: width 4s;
        }
        .status-text {
            margin-top: 35px;
            font-size: 18px;
            text-align: center;
            color: #5C6A75;
        }
        .confirmation {
            animation-delay: calc(0.2s * var(--animation-order));
        }
        .confirmation h1 {
            color: #2563EB;
            font-size: 33px;
            text-align: center;
        }
        .confirmation p {
            color: black;
            font-size: 16px;
        }

        .button-confirm {
            font-size: 29px;
            color: white;
            background-color: #FF8C00;
            padding: 15px;
            margin: 20px auto;
            display: block;
            text-align: center;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            width: 85%;
            width: calc(100vw - 50px);
            max-width: 350px;
        }

        .small-text {
            text-align: center;
            font-size: 16px;
            margin-top: 10px;
        }
        @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

        .confirmation p,
        .confirmation h1,
        .button-confirm,
        .small-text {
            opacity: 0;
            transform: translateY(20px);
            animation: slideInUp 0.5s forwards;
        }

        .status-list {
            margin-top: 35px;
            list-style-type: none;
            padding-left: 0;
        }
        .status-item {
            display: flex;
            align-items: center;
            justify-content: center; /* Centraliza o texto */
            font-size: 18px;
            color: #5C6A75;
            margin-bottom: 10px; /* Distncia entre os textos */
        }
        
        .divider {
            height: 1px;
            background: linear-gradient(to right, rgba(255,255,255,0), #ccc, rgba(255,255,255,0));
            display: none;
            width: 100%;
            margin-top: 35px;
        }
        
        .check-icon {
            margin-left: 10px;
            display: none;
        }
        .grouped-text {
    margin-top: 0;
    margin-bottom: 0;
}
    </style>
</head>
<body>
    <div class="container">
        <div class="checkpoints">
            <div class="point active" id="point1"></div>
            <div class="line" id="line1"></div>
            <div class="point" id="point2"></div>
            <div class="line" id="line2"></div>
            <div class="point" id="point3"></div>
            <div class="line" id="line3"></div>
            <div class="point" id="point4"></div>
        </div>
        <ul class="status-list" id="statusList">
            <li class="status-item" id="status1" style="display:none;"><span>Verificando saldos e resgates...</span><img class="check-icon" src="files/check30.svg" alt="Check"></li>
            <li class="status-item" id="status2" style="display:none;"><span>Confirmando protocolo: <strong>1858</strong>...</span><img class="check-icon" src="files/check30.svg" alt="Check"></li>
            <li class="status-item" id="status3" style="display:none;"><span>Preparando resultado detalhado...</span><img class="check-icon" src="files/check30.svg" alt="Check"></li>
        </ul>
        <div class="divider" id="divider"></div>
<div class="confirmation" id="confirmation" style="display:none; margin-top: 35px;">
    <h1 style="--animation-order: 1;">Confirme seus dados:</h1>
    <p class="grouped-text" style="--animation-order: 2;"><b>Nome:</b> </p>
    <p class="grouped-text" style="--animation-order: 3;"><b>Data Nascimento:</b> </p>
    <p class="grouped-text" style="--animation-order: 4;"><b>Sexo:</b> </p>
    <p class="grouped-text" style="--animation-order: 5;"><b>Nome da mãe:</b> </p>
    <a href="resultado/index.php" class="button-confirm" style="--animation-order: 6; text-decoration: none;">CONFIRMAR</a>
    <div class="small-text" style="--animation-order: 7;">Toque para ver o <span style="color: #FF9142; font-weight: bold;">resultado.</span></div>
</div>
    </div>
<script>
let currentStep = 1;

function updateStep() {
    if (currentStep <= 4) {
        const lineElement = document.getElementById(`line${currentStep}`);
        const pointElement = document.getElementById(`point${currentStep + 1}`);
        const nextStatusElement = document.getElementById(`status${currentStep + 1}`);

        if (lineElement && pointElement) {
            lineElement.classList.add('active');
            setTimeout(() => {
                pointElement.classList.add('active');
                if (nextStatusElement) {
                    nextStatusElement.style.display = 'flex';
                    setTimeout(() => {
                        nextStatusElement.querySelector('.check-icon').style.display = 'inline';
                    }, 1000);
                }
                currentStep++;

                if (currentStep === 5) {
                    document.getElementById('confirmation').style.display = 'block';
                    document.getElementById('divider').style.display = 'block';
                }
            }, 2000);
        }
    }
}

// Mostra o primeiro status imediatamente
document.getElementById('status1').style.display = 'flex';
setTimeout(() => {
    document.getElementById('status1').querySelector('.check-icon').style.display = 'inline';
}, 1000);

setTimeout(updateStep, 1000); 
setInterval(updateStep, 2000);
</script>
</body>
</html>
