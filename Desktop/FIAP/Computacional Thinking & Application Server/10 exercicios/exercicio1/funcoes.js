function receberSalario() 
{
	var cont = 0;
	var num = 0;
	var soma=0;
	var media=0;
	for(cont=1; cont <= 5; cont++)
	{
		num = prompt ("digite o " + cont + "º salário:");
		soma = parseInt(soma) + parseInt(num);
	}
		media = parseInt(soma) / 5;
		alert ("A sua média salarial é " + media);
}