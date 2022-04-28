function receberSalario() 
{
	var cont=1;
	var num=0;
	var soma=0;
	
	while(cont <= 5){
		num = prompt ("Digite o " + cont + "º salário:");
		soma = parseInt(soma) + parseInt(num);
		cont++;
	}
	media = parseInt(soma) / 5;
	alert ("A média dos salários é " + media);
}