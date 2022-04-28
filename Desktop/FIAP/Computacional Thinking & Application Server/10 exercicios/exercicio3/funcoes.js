function receberSalario() 
{
	var cont=0;
	var num=0;
	var soma=0;
	var quant=0;
	var apoio = prompt("Digite a quantidade de funcionários que tem a empresa:");
	for(cont=1; cont <= apoio; cont++)
	{
		num = prompt ("digite o " + cont + "º salário:");
		soma = parseInt(soma) + parseInt(num);
	}
	media = parseInt(soma) / apoio;
	alert ("A média dos salários é " + media);
}