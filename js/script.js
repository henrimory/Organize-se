//inicio do programa Java Script	

//declarando a variável, e convertendo para o tipo inteiro
dia =parseInt(prompt("Que dia é hoje? Se Programe.","Digite Aqui"));	


//validação do valor da variável, para entrar na rotina
if ((dia>=1)&&(dia<=7)){
	//ápós a validação entramos na rotina, de acordo com o dia
	//armazenamos a semana na variável
	semana = new Array("","Domingo","Segunda-feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado");
		
	if(dia==2){
		document.write("Na "+semana[2]+", você tem aula de Programação Web I e Banco de dados I.<br>");
		}else if (dia==3) {
			document.write("Na "+semana[3]+", você tem aula de Programação Web I e Programação e Algoritmo.<br>");
		}else if (dia==4){
			document.write("Na "+semana[4]+",você tem aula de Fundamentos de Informática e Design Digital.<br>");
		}else if (dia==5){
			document.write("Na "+semana[5]+", aula de Técnicas de Programação e Programação e Algoritmo.<br>");
		}else if (dia==6){
			document.write("Na "+semana[6]+", aula de Linguagem Trabalho e Tecnologia e Análise e Projeto de Sistema.<br>");
		}else if (dia==7){
			document.write("Ufa!!!<br>");
		}else if (dia==1){
			document.write(semana[1]+ ", se prepare para a "+semana[2]+"<br>");
		}	
		//se valor não corresponder, retornamos um feedback e saimos da rotina			
}else{
document.write("Não digite letras, palavras ou valores maiores que 7 e menor que 1.<br>Também não deixe vazio!!!<br>");
}

	//de acordo com o dia informar qual o professor
switch(dia) {
		case 1:
    	document.write("Mas relaxe!!! Vai dar tudo certo, você vai melhorar a nota.");
	    break;
		case 2:
	    	document.write("Os Professor é o luis, na duas matérias.");
	    break;
		case 3:
	    	document.write("Os Professores são Diego e Francisco.");
	    break;
		case 4:
	    	document.write("Os Professores são Francalino e Diego.");
	   	break;
		case 5:
	    	document.write("Os Professores é o Marcos e Francisco.");
	    break;
		case 6:
	    	document.write("Os Professores são Adriana e Mauricio.");
	    break;
		case 7:
	    	document.write("Finalmente "+semana[7]+", estude mas descanse.");
	    break;
	    //se o valor for inválido o usário é informado porque não obteve o resultado
		default:
	   		document.write("Dia inválido, para o sistema!!!<br>Tente Novamente.");
	break;
}    





