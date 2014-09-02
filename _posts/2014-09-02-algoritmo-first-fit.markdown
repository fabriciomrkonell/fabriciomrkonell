---
layout: post
title:  "Algoritmo - First Fit"
date:   2014-09-02 10:00:00
categories: Blog
---

No algoritmo first fit, o alocador mantém a lista dos blocos livres, e quando recebe uma requisição de memória, percorre a lista de blocos de memória livre em busca do primeiro quadro que satisfaz o programa. Se o bloco é significativamente maior que do que o programa precisa, então o bloco é dividido e a parte que sobre que é adicionada novamente a lista.
Este algoritmo trabalha garantindo que a alocação seja rápida.

<h3>Alocação de memória</h3>
Não é tão rápido na parte de reciclagem de blocos, mas suporta o merge de nós livres adjacentes. Isso diminui a fragmentação e melhora a localidade das referencias.

<h3>Tamanho incremental</h3>
Escolhe o bloco com o menor tamanho possível de ser alocado, para ser suficientemente o tamanho do bloco desejado.

<h3>Tamanho decremental</h3>
O primeiro bloco será maior mas a velocidade de alocação é muito mais rápida.

<h3>Tempo incremental desde o último uso</h3>
Este é muito mais rápido para adicionar novos blocos livres que são adicionados ao inicio da lista, e encoraja a pegar a melhor localização onde os blocos sempre usados não ficam espalhados, mas podem gerar uma fragmentação ruim.

<h3>Examplo</h3>
{% highlight ruby %}
int main(){

   int p,m;  
   printf("Enter number of processes:");
   scanf("%d",&p);
   printf("Enter number of Memory blocks:");
   scanf("%d",&m);
   
   int parr[p],marr[m],i;
   for(i=0;i<p;i++)
   {
     printf("Enter size of process %d:",i+1);
     scanf("%d",&parr[i]);      
   }
   for(i=0;i<m;i++)
   {
     printf("Enter size of memory %d:",i+1);
     scanf("%d",&marr[i]);      
   }
   
   int j;
   for(i=0;i<p;i++){
       for(j=0;j<m;j++){
         if(marr[j]>=parr[i]){
              marr[j]-=parr[i];
              printf("Allocating process %d to memory %d\n Size remaining in it after allocation %d\n\n",i+1,j+1,marr[j]);   
              break;            
         }  
         
        
     }    
      if(j==m)
         {printf("Not enough memory for process %d",i);break;}        
   }
  getch();  
}
{% endhighlight %}

Trabalho de Sistemas Operacionais - Alunos: <a target="blank" href="https://github.com/schmittjoaopedro">João</a> e <a target="blank" href="https://github.com/FabricioRonchi">Fabrício</a>.

<h3>Referências</h3>
* <a target="blank" href="http://www.memorymanagement.org/mmref/alloc.html">Memory Management</a>
* <a target="blank" href="http://thumbsup2life.blogspot.com.br/2011/02/best-fit-first-fit-and-worst-fit-memory.html">thumbsup2life.blogspot.com.br</a>
* <a target="blank" href="http://www.cwithabhas.com/2012/04/first-fit-program-in-c-language-memory.html">www.cwithabhas.com</a>
* <a target="blank" href="http://www.cs.rit.edu/~ark/lectures/gc/03_03_02.html">www.cs.rit.edu</a>
* <a target="blank" href="http://research.cs.vt.edu/AVresearch/MMtutorial/FirstFit.php">research.cs.vt.edu</a>

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
