function receberSalario()
{
	var cont=1;
	var num=0; 
	var soma=0;
	
	var apoio = prompt("Digite a quantidade de funcionários que tem a empresa:");
	
	do{
		num = prompt ("Digite o " + cont + "º salário:");
		soma = parseInt(soma) + parseInt(num);
		cont++;
	}while(cont <= apoio);
	
	media = parseInt(soma) / apoio;
	
	alert("A média dos salários é " + media);
}