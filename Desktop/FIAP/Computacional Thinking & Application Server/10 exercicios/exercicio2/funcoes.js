function receberSalario()
{
	var cont=1; 
	var num=0;
	var soma=0;
	var quant=0;
	
	for(cont=1; cont <= 5; cont++)
	{
		num = prompt ("Digite o " + cont + "º salário:");
		soma = parseInt(soma) + parseInt(num);
	}
	media = parseInt(soma) / 5;
	if (media <= 5000)
	{
		alert("Rever o salário desse profissional.");
	}
	else
	{
		alert("A média salarial desse funcionário, está correto.");
	}
}