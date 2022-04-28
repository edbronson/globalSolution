function verificarMes() 
{
	var verificar = prompt("Digite um número, que corresponde a um mês do ano.");
	switch (verificar)
	{
		case "1":
			alert("O número digitado, corresponde ao mês de janeiro.");
			break;
		case "2":
			alert("O número digitado, corresponde ao mês de fevereiro.");
			break;
		case "3":
			alert("O número digitado, corresponde ao mês de março.");
			break;
		case "4":
			alert("O número digitado, corresponde ao mês de abril.");
			break;
		case "5":
			alert("O número digitado, corresponde ao mês de maio.");
			break;
		case "6":
			alert("O número digitado, corresponde ao mês de junho.");
			break;
		case "7":
			alert("O número digitado, corresponde ao mês de julho.");
		break;
		case "8":
			alert("O número digitado, corresponde ao mês de agosto.");
			break;
		case "9":
			alert("O número digitado, corresponde ao mês de setembro.");
		break;
		case "10":
			alert("O número digitado, corresponde ao mês de outubro.");
		break;
		case "11":
			alert("O número digitado, corresponde ao mês de novembro.");
			break;
		case "12":
			alert("O número digitado, corresponde ao mês de dezembro.");
		break;
		default:
			alert("O número digitado, não corresponde a um mês do ano.");
			break;
	}
}