Basegeneral=[];
var Cabe=0;
var TamDisc=0;
var ejex = [];
var ejey = [];
var ejex1 = [];
var ejey1 = [];
var ejex2 = [];
var ejey2 = [];
var ejex3 = [];
var ejey3 = [];
var ejex3b = [];
var ejey3b = [];
var ejex4 = [];
var ejey4 = [];
var ejex5 = [];
var ejey5 = [];
var ejex6 = [];
var ejey6 = [];

function RegInicial(){
    TamDisc= document.getElementById("Tdisco").value;
    console.log(TamDisc+"<===== Disco");
    Cabe = parseInt(document.getElementById("IniCab").value);
   // var lista = document.getElementById('Listado');
    Basegeneral.push(Cabe);
}

function registrar(){
    var Tempi= parseInt(document.getElementById("InsPos").value);
    Basegeneral.push(Tempi);
    console.log(Basegeneral+"gaaaa");
    //document.getElementById("tabla1").innerHTML = "";
    document.getElementById("tabla1").innerHTML += '<tbody ><td>'+"---"+'</td><td>'+Tempi+'</td><td>'+"---"
    +'</td><td>'+"---"+'</td></tbody>';
}

function ordenarFCFS(){
    Basefcfs =[];
    TiempoSumado=[];
    tiempoUntario=[];
    Basefcfs=Basegeneral.slice();
    console.log(Basefcfs+"juju");
    TiempoSumado[0]=0;
    tiempoUntario[0]=0;
    var prom01=0;
    var prom02=0;

    for (var i = 1; i < Basefcfs.length; i++)
    {
        
        console.log(i+"contador");
        if (Basefcfs[i-1]<=Basefcfs[i])
        {
            var lala = Basefcfs[i] - Basefcfs[i-1];
            lala= lala* lala;
            lala= Math.sqrt(lala);

            tiempoUntario[i]=lala;
           // tiempoUntario[i]=Basefcfs[i] - Basefcfs[i-1];
            TiempoSumado[i]=tiempoUntario[i]+TiempoSumado[i-1];
            prom01=prom01+TiempoSumado[i]; //para el promedio de los sumados
            prom02=prom02+tiempoUntario[i]; //para el promedio de los unitarios
        }
        else{

            var lola = Basefcfs[i-1] - Basefcfs[i];
            lola= lola* lola;
            lola= Math.sqrt(lola);

            tiempoUntario[i]=lola;
           // tiempoUntario[i]=Basefcfs[i-1] - Basefcfs[i];
            TiempoSumado[i]=tiempoUntario[i]+TiempoSumado[i-1];
            prom01=prom01+TiempoSumado[i]; //para el promedio de los sumados
            prom02=prom02+tiempoUntario[i]; //para el promedio de los unitarios
        }

    }
    console.log(tiempoUntario+"...unitario");
    console.log(TiempoSumado+"...sumado");
    prom01= prom01 / (Basefcfs.length-1);
    prom02= prom02 / (Basefcfs.length-1);
    console.log(prom01+" ---- "+ prom02);

    for (var i = 0; i < Basefcfs.length; i++){
        ejex.push(Basefcfs[i]);
        ejey.push(i);
    }

    document.getElementById("tabla1").innerHTML = "";
	for (var i = 1; i < Basefcfs.length; i++) {
        document.getElementById("tabla1").innerHTML += '<tbody><td>'+"fcfs"+'</td><td>'+Basefcfs[i]
        +'</td><td>'+tiempoUntario[i]+'</td><td>'+TiempoSumado[i]+'</td></tbody>';
        
    }
    document.getElementById("tabla1").innerHTML += '<tbody ><td>'+"PROMEDIOS"+'</td><td>'+"  :"
        +'</td><td>'+prom02+'</td><td>'+prom01+'</td></tbody>';
    
    var data = [{
      x: ejex,
      y: ejey,
      type: "linear"
    }];
    Plotly.newPlot("grafico",data);
}

function ordenarSSTF(){
    Basesstf =[];
    TiempoSumadosstf=[];
    tiempoUntariosstf=[];
    Basesstf=Basegeneral.slice();
    console.log(Basesstf+"----sstf");
    TiempoSumadosstf[0]=0;
    tiempoUntariosstf[0]=0;
    var prom01sstf=0;
    var prom02sstf=0;
    for (var i =0;  i < Basesstf.length; i++)
    {
        
        var menor=99999;
        var id
        for ( var j=i+1 ;  j < Basesstf.length; j++)
        {
            console.log(Basesstf+"entro al j");
            var ag= Basesstf[i] - Basesstf[j];
            ag= ag * ag;
            ag= Math.sqrt(ag);

            if( ag< menor )
                {
                    menor = ag;
                    id=j;
                    console.log(Basesstf[j]+"entro al arriba--> "+i);
                    console.log(menor+"---enor--"+j);
                }

            /*
            if (Basesstf[j] < Basesstf[i])
            {
                console.log(Basesstf[i]+"----++++--> "+Basesstf[j]);
                if(Basesstf[i] - Basesstf[j] < menor && Basesstf[i] > Basesstf[j])
                {
                    menor = Basesstf[i] - Basesstf[j];
                    id=j;
                    console.log(Basesstf[j]+"entro al arriba--> "+i);
                    console.log(menor+"---enor--"+j);
                }
            }
            else {
                if(Basesstf[j] - Basesstf[i] < menor)
                {
                    menor = Basesstf[j] - Basesstf[i];
                    id=j;
                    console.log(Basesstf[j]+"entro al abajo");
                    console.log(menor+"---enor--"+j);
                }
            }*/
            
        }
      

        if( menor != 99999)
        {
            console.log(Basesstf+"-----talvez");
            var temp= Basesstf[id];
            Basesstf[id]=Basesstf[i+1];
            Basesstf[i+1]=temp;
            console.log(Basesstf+"-----fiiiintalvez");
        }
        console.log(Basesstf+"aquiiiiiiiiiiiiiij");
        

    }

    for (var i = 0; i < Basesstf.length; i++){
        ejex1.push(Basesstf[i]);
        ejey1.push(i);
    }

    for (var i = 1; i < Basesstf.length; i++)
    {
        console.log(i+"contador");
        if (Basesstf[i-1]<=Basesstf[i])
        {
            var lala = Basesstf[i] - Basesstf[i-1];
            lala= lala* lala;
            lala= Math.sqrt(lala);

            tiempoUntariosstf[i]=lala;
            TiempoSumadosstf[i]=tiempoUntariosstf[i]+TiempoSumadosstf[i-1];
            prom01sstf=prom01sstf+TiempoSumadosstf[i]; //para el promedio de los sumados
            prom02sstf=prom02sstf+tiempoUntariosstf[i]; //para el promedio de los unitarios
        }
        else{

            var lola = Basesstf[i-1] - Basesstf[i];
            lola= lola* lola;
            lola= Math.sqrt(lola);

            tiempoUntariosstf[i]=lola;
            TiempoSumadosstf[i]=tiempoUntariosstf[i]+TiempoSumadosstf[i-1];
            prom01sstf=prom01sstf+TiempoSumadosstf[i]; //para el promedio de los sumados
            prom02sstf=prom02sstf+tiempoUntariosstf[i]; //para el promedio de los unitarios
        }

    }
    console.log(tiempoUntariosstf+"...unitario");
    console.log(TiempoSumadosstf+"...sumado");
    prom01sstf= prom01sstf / (Basesstf.length-1);
    prom02sstf= prom02sstf / (Basesstf.length-1);
    console.log(prom01sstf+" ---- "+ prom02sstf);


    console.log(Basesstf+"!!!sstf--procesddo");

    document.getElementById("tabla1").innerHTML = "";
	for (var i = 1; i < Basesstf.length; i++) {
        document.getElementById("tabla1").innerHTML += '<tbody><td>'+"sstf"+'</td><td>'+Basesstf[i]+'</td><td>'
        +tiempoUntariosstf[i]+'</td><td>'+TiempoSumadosstf[i]+'</td></tbody>';
    }
    
    document.getElementById("tabla1").innerHTML += '<tbody ><td>'+"PROMEDIOS"+'</td><td>'+"  :"
        +'</td><td>'+prom02sstf+'</td><td>'+prom01sstf+'</td></tbody>';


    var data1 = [{
    x: ejex1,
    y: ejey1,
    type: "linear"
    }];
    Plotly.newPlot("grafico",data1);   
}

function ordenarSCAN(){
    Basescan =[];
    TiempoSumadoscan=[];
    tiempoUntarioscan=[];

    Basescan=[];
    Basescan=Basegeneral.slice();

    console.log("----->"+Basegeneral+"<-----");    
    console.log(Basescan+"----scan");
    TiempoSumadoscan[0]=0;
    tiempoUntarioscan[0]=0;
    var cabezascan = Basescan[0];
    var prom01scan=0;
    var prom02scan=0;
    var cont = 0;
    var discoscan=TamDisc;
    console.log(discoscan+"<------ tamaño disco");
    Basescan.sort(function(prev,next){
        return prev-next;
    });
    console.log("----->"+Basegeneral+"<-----");
    console.log(Basescan+"aquiiiiiiiiiiiiiij");

    basefinscan=[];

    for (var i =0;  i < Basescan.length; i++)
    {
        if(Basescan[i]>=cabezascan)
        {
            basefinscan.push(Basescan[i]);
            ejex2.push(Basescan[i]);
            ejey2.push(cont);
            cont++;

        }

    }
    console.log(basefinscan+"*************primera pasa");
    ejex2.push(discoscan);
    ejey2.push(cont);

    for (var i =Basescan.length;  i >=0; i--)
    {
        if(Basescan[i]<cabezascan)
        {
            basefinscan.push(Basescan[i]);
            ejex2.push(Basescan[i]);
            ejey2.push(cont+1);
            cont++;
        }

    }
    console.log(basefinscan+"*************final pas");

    var api =0;
    for (var i = 1; i < basefinscan.length; i++)
    {
        
        console.log(i+"contador");
        if (basefinscan[i]>=basefinscan[i-1])
        {
            var lala = basefinscan[i] - basefinscan[i-1];
        
            tiempoUntarioscan[i]=lala;
            TiempoSumadoscan[i]=tiempoUntarioscan[i]+TiempoSumadoscan[i-1];
            prom01scan=prom01scan+TiempoSumadoscan[i]; //para el promedio de los sumados
            prom02scan=prom02scan+tiempoUntarioscan[i]; //para el promedio de los unitarios
        }
        else{
            
            if(api == 0)
            {
                

                var lala = discoscan - basefinscan[i-1];
                lala= discoscan- basefinscan[i] +lala;
                console.log(discoscan+"********discotam---->"+lala);
                        
                tiempoUntarioscan[i]=lala;
                TiempoSumadoscan[i]=tiempoUntarioscan[i]+TiempoSumadoscan[i-1];
                prom01scan=prom01scan+TiempoSumadoscan[i]; //para el promedio de los sumados
                prom02scan=prom02scan+tiempoUntarioscan[i];
                api=api+1;
            }
            else {
                var lola = basefinscan[i-1] - basefinscan[i];
                
                tiempoUntarioscan[i]=lola;
            
                TiempoSumadoscan[i]=tiempoUntarioscan[i]+TiempoSumadoscan[i-1];
                prom01scan=prom01scan+TiempoSumadoscan[i]; //para el promedio de los sumados
                prom02scan=prom02scan+tiempoUntarioscan[i]; //para el promedio de los unitarios

            }
            
        }

    }
    console.log(tiempoUntarioscan+"...unitario");
    console.log(TiempoSumadoscan+"...sumado");
    prom01scan= prom01scan / (basefinscan.length-1);
    prom02scan= prom02scan / (basefinscan.length-1);
    console.log(prom01scan+" ---- "+ prom02scan);

    document.getElementById("tabla1").innerHTML = "";
	for (var i = 1; i < basefinscan.length; i++) {
        document.getElementById("tabla1").innerHTML += '<tbody><td>'+"scan"+'</td><td>'+basefinscan[i]+'</td><td>'
        +tiempoUntarioscan[i]+'</td><td>'+TiempoSumadoscan[i]+'</td></tbody>';
    }
    
    document.getElementById("tabla1").innerHTML += '<tbody"><td>'+"PROMEDIOS"+'</td><td>'+"  :"
        +'</td><td>'+prom02scan+'</td><td>'+prom01scan+'</td></tbody>';

    

    /*while (right > 0)
    {
        var k=0;
        for(var i=0; i<Basescan.length; i++)
        {
            if (Basescan[i+1]<Basescan[i])
            {
                temp=Basescan[i+1];
                Basescan[i+1]=Basescan[i];
                Basescan[i]=temp;
                k=1;

            }
            right=k;
        }

    }*/
    var data2 = [{
        x: ejex2,
        y: ejey2,
        type: "linear"
      }];
      Plotly.newPlot("grafico",data2);
}

function ordenarC_SCAN(){
    Basec_scan =[];
    TiempoSumadoc_scan=[];
    tiempoUntarioc_scan=[];
    Basec_scan=Basegeneral.slice();
    
    console.log(Basec_scan+"----scan");
    TiempoSumadoc_scan[0]=0;
    tiempoUntarioc_scan[0]=0;
    var cabezac_scan = Basec_scan[0];
    var prom01c_scan=0;
    var prom02c_scan=0;
    var discoc_scan=TamDisc;
    var m = 0;
    var m2 = 0;
    console.log(discoc_scan+"<------ tamaño disco");
    
    Basec_scan.sort(function(prev,next){
        return prev-next;
    });
    console.log("----->"+Basegeneral+"<-----");
    console.log(Basec_scan+"aquiiiiiiiiiiiiiij");

    basefinc_scan=[];

    for (var i =0;  i < Basec_scan.length; i++)
    {
        if(Basec_scan[i]>=cabezac_scan)
        {
            basefinc_scan.push(Basec_scan[i]);
            ejex3.push(Basec_scan[i]);
            ejey3.push(m);
            m++;
        }

    }
    console.log(basefinc_scan+"*************primera pasa");
    ejex3.push(discoc_scan);
    ejey3.push(m-1);
    ejex3b.push(0);
    ejey3b.push(m-1);

    for (var i =0;  i < Basec_scan.length; i++)
    {
        if(Basec_scan[i]<cabezac_scan)
        {
            console.log(Basec_scan[i]+"*****----psooo");
            basefinc_scan.push(Basec_scan[i]);
            console.log(Basec_scan[i]+"*****----sosososo");
            ejex3b.push(Basec_scan[i]);
            ejey3b.push(m);
            m++;
        }

    }
    console.log(basefinc_scan+"*************final pas");

    var api =0;
    for (var i = 1; i < basefinc_scan.length; i++)
    {
        
        console.log(i+"contador");
        if (basefinc_scan[i]>=basefinc_scan[i-1])
        {
            var lala = basefinc_scan[i] - basefinc_scan[i-1];
        
            tiempoUntarioc_scan[i]=lala;
            TiempoSumadoc_scan[i]=tiempoUntarioc_scan[i]+TiempoSumadoc_scan[i-1];
            prom01c_scan=prom01c_scan+TiempoSumadoc_scan[i]; //para el promedio de los sumados
            prom02c_scan=prom02c_scan+tiempoUntarioc_scan[i]; //para el promedio de los unitarios
        }
        else{
            
            if(api == 0)
            {
                var lala = discoc_scan - basefinc_scan[i-1];
                lala= basefinc_scan[i]+1 +lala;
                console.log(discoc_scan+"********discotam---->"+lala);
                        
                tiempoUntarioc_scan[i]=lala;
                TiempoSumadoc_scan[i]=tiempoUntarioc_scan[i]+TiempoSumadoc_scan[i-1];
                prom01c_scan=prom01c_scan+TiempoSumadoc_scan[i]; //para el promedio de los sumados
                prom02c_scan=prom02c_scan+tiempoUntarioc_scan[i];
                api=api+1;
            }
            else {
                var lola = basefinc_scan[i] - basefinc_scan[i-1];
                
                tiempoUntarioc_scan[i]=lola;
            
                TiempoSumadoc_scan[i]=tiempoUntarioc_scan[i]+TiempoSumadoc_scan[i-1];
                prom01c_scan=prom0c_1scan+TiempoSumadoc_scan[i]; //para el promedio de los sumados
                prom02c_scan=prom02c_scan+tiempoUntarioc_scan[i]; //para el promedio de los unitarios

            }
            
        }

    }
    console.log(tiempoUntarioc_scan+"...unitario");
    console.log(TiempoSumadoc_scan+"...sumado");
    prom01c_scan= prom01c_scan / (basefinc_scan.length-1);
    prom02c_scan= prom02c_scan / (basefinc_scan.length-1);
    console.log(prom01c_scan+" ---- "+ prom02c_scan);

    document.getElementById("tabla1").innerHTML = "";
	for (var i = 1; i < basefinc_scan.length; i++) {
        document.getElementById("tabla1").innerHTML += '<tbody><td>'+"C-SCAN"+'</td><td>'+basefinc_scan[i]+'</td><td>'
        +tiempoUntarioc_scan[i]+'</td><td>'+TiempoSumadoc_scan[i]+'</td></tbody>';
    }

    document.getElementById("tabla1").innerHTML += '<tbody ><td>'+"PROMEDIOS"+'</td><td>'+"  :"
        +'</td><td>'+prom02c_scan+'</td><td>'+prom01c_scan+'</td></tbody>';
    

    var a1 = {
        x: ejex3,
        y: ejey3,
        
        type: "linear"
      };
      var b1 = {
        x: ejex3b,
        y: ejey3b,
        
        type: "linear"
      };
      var data5 = [a1,b1];
      Plotly.newPlot("grafico", data5, {editable: true});
}

function ordenarLOOK(){
    Basescan =[];
    TiempoSumadolook=[];
    tiempoUntariolook=[];

    Baselook=[];
    Baselook=Basegeneral.slice();

    console.log("----->"+Basegeneral+"<-----");    
    console.log(Baselook+"----scan");
    TiempoSumadolook[0]=0;
    tiempoUntariolook[0]=0;
    var cabezalook = Baselook[0];
    var prom01look=0;
    var prom02look=0;
    var discolook=TamDisc;
    console.log(discolook+"<------ tamaño disco");
    Baselook.sort(function(prev,next){
        return prev-next;
    });
    console.log("----->"+Basegeneral+"<-----");
    console.log(Baselook+"aquiiiiiiiiiiiiiij");

    basefinlook=[];

    for (var i =0;  i < Baselook.length; i++)
    {
        if(Baselook[i]>=cabezalook)
        {
            basefinlook.push(Baselook[i]);
        }

    }
    console.log(basefinlook+"*************primera pasa");
    
    for (var i =Baselook.length;  i >=0; i--)
    {
        if(Baselook[i]<cabezalook)
        {
            basefinlook.push(Baselook[i]);
        }

    }
    console.log(basefinlook+"*************final pas");

    var api =0;
    for (var i = 1; i < basefinlook.length; i++)
    {
        
        console.log(i+"contador");
        if (basefinlook[i]>=basefinlook[i-1])
        {
            var lala = basefinlook[i] - basefinlook[i-1];
        
            tiempoUntariolook[i]=lala;
            TiempoSumadolook[i]=tiempoUntariolook[i]+TiempoSumadolook[i-1];
            prom01look=prom01look+TiempoSumadolook[i]; //para el promedio de los sumados
            prom02look=prom02look+tiempoUntariolook[i]; //para el promedio de los unitarios
        }
        else{
            
            if(api == 0)
            {
                

                var lala = basefinlook[i-1] - basefinlook[i];
                lala= 0 +lala;
                console.log(discolook+"********discotam---->"+lala);
                        
                tiempoUntariolook[i]=lala;
                TiempoSumadolook[i]=tiempoUntariolook[i]+TiempoSumadolook[i-1];
                prom01look=prom01look+TiempoSumadolook[i]; //para el promedio de los sumados
                prom02look=prom02look+tiempoUntariolook[i];
                api=api+1;
            }
            else {
                var lola = basefinlook[i-1] - basefinlook[i];
                
                tiempoUntariolook[i]=lola;
            
                TiempoSumadolook[i]=tiempoUntariolook[i]+TiempoSumadolook[i-1];
                prom01look=prom01look+TiempoSumadolook[i]; //para el promedio de los sumados
                prom02look=prom02look+tiempoUntariolook[i]; //para el promedio de los unitarios

            }
            
        }

    }
    console.log(tiempoUntariolook+"...unitario");
    console.log(TiempoSumadolook+"...sumado");
    prom01look= prom01look / (basefinlook.length-1);
    prom02look= prom02look / (basefinlook.length-1);
    console.log(prom01look+" ---- "+ prom02look);

    document.getElementById("tabla1").innerHTML = "";
	for (var i = 1; i < basefinlook.length; i++) {
        document.getElementById("tabla1").innerHTML += '<tbody><td>'+"LOOK"+'</td><td>'+basefinlook[i]+'</td><td>'
        +tiempoUntariolook[i]+'</td><td>'+TiempoSumadolook[i]+'</td></tbody>';
    }
    
    document.getElementById("tabla1").innerHTML += '<tbody ><td>'+"PROMEDIOS"+'</td><td>'+"  :"
        +'</td><td>'+prom02look+'</td><td>'+prom01look+'</td></tbody>';
    for (var i = 0; i < basefinlook.length; i++){
        ejex4.push(basefinlook[i]);
        ejey4.push(i);
    }

    var data4 = [{
    x: ejex4,
    y: ejey4,
    type: "linear"
    }];
    Plotly.newPlot("grafico",data4);
}

function ordenarC_LOOK(){
    Basec_look=[];
    TiempoSumadoc_look=[];
    tiempoUntarioc_look=[];
    Basec_look=Basegeneral.slice();
    
    console.log(Basec_look+"----scan");
    TiempoSumadoc_look[0]=0;
    tiempoUntarioc_look[0]=0;
    var cabezac_look = Basec_look[0];
    var prom01c_look=0;
    var prom02c_look=0;
    var discoc_look=TamDisc;
    
    var y = 0;
    var y2 = 0;
    
    console.log(discoc_look+"<------ tamaño disco");
    
    Basec_look.sort(function(prev,next){
        return prev-next;
    });
    console.log("----->"+Basegeneral+"<-----");
    console.log(Basec_look+"aquiiiiiiiiiiiiiij");

    basefinc_look=[];

    for (var i =0;  i < Basec_look.length; i++)
    {
        
        if(Basec_look[i]>=cabezac_look)
        {
            basefinc_look.push(Basec_look[i]);
            ejex5.push(Basec_look[i]);
            ejey5.push(y);
            
            y++;
        }
        

    }
    console.log(ejex+"este es el error");
    console.log(basefinc_look+"*************primera pasa");
    ejex6.push(0);
    ejey6.push(y-1);

    for (var i =0;  i < Basec_look.length; i++)
    {
        if(Basec_look[i]<cabezac_look)
        {
            console.log(Basec_look[i]+"*****----psooo");
            basefinc_look.push(Basec_look[i]);
            console.log(Basec_look[i]+"*****----sosososo");
            ejex6.push(Basec_look[i]);
            ejey6.push(y);
            
            y++;

        }

    }
    console.log(basefinc_look+"*************final pas");

    var api =0;
    for (var i = 1; i < basefinc_look.length; i++)
    {
        
        console.log(i+"contador");
        if (basefinc_look[i]>=basefinc_look[i-1])
        {
            var lala = basefinc_look[i] - basefinc_look[i-1];
        
            tiempoUntarioc_look[i]=lala;
            TiempoSumadoc_look[i]=tiempoUntarioc_look[i]+TiempoSumadoc_look[i-1];
            prom01c_look=prom01c_look+TiempoSumadoc_look[i]; //para el promedio de los sumados
            prom02c_look=prom02c_look+tiempoUntarioc_look[i]; //para el promedio de los unitarios
        }
        else{
            
            if(api == 0)
            {
                var lala = discoc_look - basefinc_look[i-1];
                lala= basefinc_look[i]+1 +lala;
                console.log(discoc_look+"********discotam---->"+lala);
                        
                tiempoUntarioc_look[i]=lala;
                TiempoSumadoc_look[i]=tiempoUntarioc_look[i]+TiempoSumadoc_look[i-1];
                prom01c_look=prom01c_look+TiempoSumadoc_look[i]; //para el promedio de los sumados
                prom02c_look=prom02c_look+tiempoUntarioc_look[i];
                api=api+1;
            }
            else {
                var lola = basefinc_look[i] - basefinc_look[i-1];
                
                tiempoUntarioc_look[i]=lola;
            
                TiempoSumadoc_look[i]=tiempoUntarioc_look[i]+TiempoSumadoc_look[i-1];
                prom01c_look=prom0c_1look+TiempoSumadoc_look[i]; //para el promedio de los sumados
                prom02c_look=prom02c_look+tiempoUntarioc_look[i]; //para el promedio de los unitarios

            }   
        }
    }
    console.log(tiempoUntarioc_look+"...unitario");
    console.log(TiempoSumadoc_look+"...sumado");
    prom01c_look= prom01c_look / (basefinc_look.length-1);
    prom02c_look= prom02c_look / (basefinc_look.length-1);
    console.log(prom01c_look+" ---- "+ prom02c_look);

    document.getElementById("tabla1").innerHTML = "";
	for (var i = 1; i < basefinc_look.length; i++) {
        document.getElementById("tabla1").innerHTML += '<tbody><td>'+"C-LOOK"+'</td><td>'+basefinc_look[i]+'</td><td>'
        +tiempoUntarioc_look[i]+'</td><td>'+TiempoSumadoc_look[i]+'</td></tbody>';
    }
    
    document.getElementById("tabla1").innerHTML += '<tbody ><td>'+"PROMEDIOS"+'</td><td>'+"  :"
        +'</td><td>'+prom02c_look+'</td><td>'+prom01c_look+'</td></tbody>';
    
    
   
    /*var data5 = [{
    x: ejex5,
    y: ejey5,
    type: "linear"
    }];
    Plotly.newPlot("grafico",data5);*/
    
    
      var a1 = {
        x: ejex5,
        y: ejey5,
        
        type: "linear"
      };
      var b1 = {
        x: ejex6,
        y: ejey6,
        
        type: "linear"
      };
      var data5 = [a1,b1];
      Plotly.newPlot("grafico", data5, {editable: true});
    
}





