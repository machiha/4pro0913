Vue.component('tile',
	      {
		  template:'<polygon @click="test()" :points="pp" fill="yellow" stroke="black"></polygon>',
		  props:['pp'],
		  methods:{
		      test:function(){
			  alert("cdf");
		      }
		  }
	      }

	     );
let app = new Vue({
    el: "#app",
    data:{
	N:2,
	/*choutenn:{A:{x:400,y:400},
	  B:{x:500,y:400},
	  C:{x:500,y:500},
	  D:{x:400,y:500},
	  E:{x:500,y:300},
	  F:{x:400,y:300}
	  },
	  men:{f0:["A","B","C","D"],
	  f1:["A","B","E","F"]},
	*/
	cont:100,
	theta:0,

	folded: false,

	
	choutenn: {"-2,-2,0":{"x":-200,"y":400},
		   "-2,-2,1":{"x":-100,"y":400},
		   "-1,-2,0":{"x":-50,"y":313.39745962155615},
		   "-1,-2,1":{"x":50,"y":313.39745962155615},
		   "0,-2,0":{"x":100,"y":226.79491924311228},
		   "0,-2,1":{"x":200,"y":226.79491924311228},
		   "1,-2,0":{"x":250,"y":140.1923788646684},
		   "1,-2,1":{"x":350,"y":140.1923788646684},
		   "2,-2,0":{"x":400,"y":53.58983848622455},
		   "2,-2,1":{"x":500,"y":53.58983848622455},
		   "-2,-1,0":{"x":-50,"y":486.60254037844385},
		   "-2,-1,1":{"x":50,"y":486.60254037844385},
		   "-1,-1,0":{"x":100,"y":400},
		   "-1,-1,1":{"x":200,"y":400},
		   "0,-1,0":{"x":250,"y":313.39745962155615},
		   "0,-1,1":{"x":350,"y":313.39745962155615},
		   "1,-1,0":{"x":400,"y":226.79491924311228},
		   "1,-1,1":{"x":500,"y":226.79491924311228},
		   "2,-1,0":{"x":550,"y":140.1923788646684},
		   "2,-1,1":{"x":650,"y":140.1923788646684},
		   "-2,0,0":{"x":100,"y":573.2050807568877},
		   "-2,0,1":{"x":200,"y":573.2050807568877},
		   "-1,0,0":{"x":250,"y":486.60254037844385},
		   "-1,0,1":{"x":350,"y":486.60254037844385},
		   "0,0,0":{"x":400,"y":400},
		   "0,0,1":{"x":500,"y":400},
		   "1,0,0":{"x":550,"y":313.39745962155615},
		   "1,0,1":{"x":650,"y":313.39745962155615},
		   "2,0,0":{"x":700,"y":226.79491924311228},
		   "2,0,1":{"x":800,"y":226.79491924311228},
		   "-2,1,0":{"x":250,"y":659.8076211353316},
		   "-2,1,1":{"x":350,"y":659.8076211353316},
		   "-1,1,0":{"x":400,"y":573.2050807568877},
		   "-1,1,1":{"x":500,"y":573.2050807568877},
		   "0,1,0":{"x":550,"y":486.60254037844385},
		   "0,1,1":{"x":650,"y":486.60254037844385},
		   "1,1,0":{"x":700,"y":400},
		   "1,1,1":{"x":800,"y":400},
		   "2,1,0":{"x":850,"y":313.39745962155615},
		   "2,1,1":{"x":950,"y":313.39745962155615},
		   "-2,2,0":{"x":400,"y":746.4101615137754},
		   "-2,2,1":{"x":500,"y":746.4101615137754},
		   "-1,2,0":{"x":550,"y":659.8076211353316},
		   "-1,2,1":{"x":650,"y":659.8076211353316},
		   "0,2,0":{"x":700,"y":573.2050807568877},
		   "0,2,1":{"x":800,"y":573.2050807568877},
		   "1,2,0":{"x":850,"y":486.60254037844385},
		   "1,2,1":{"x":950,"y":486.60254037844385},
		   "2,2,0":{"x":1000,"y":400},
		   "2,2,1":{"x":1100,"y":400}},
	men: {"-1,-2":["-2,-1,0","-2,-1,1","-1,-1,0","-1,-2,1","-1,-2,0","-2,-2,1"],
	      "-1,-1":["-1,-1,0","-1,-1,1","0,-1,0","0,-2,1","0,-2,0","-1,-2,1"],
	      "-1,0":["0,-1,0","0,-1,1","1,-1,0","1,-2,1","1,-2,0","0,-2,1"],
	      "-1,1":["1,-1,0","1,-1,1","2,-1,0","2,-2,1","2,-2,0","1,-2,1"],
	      "0,-2":["-2,0,0","-2,0,1","-1,0,0","-1,-1,1","-1,-1,0","-2,-1,1"],
	      "0,-1":["-1,0,0","-1,0,1","0,0,0","0,-1,1","0,-1,0","-1,-1,1"],
	      "0,0":["0,0,0","0,0,1","1,0,0","1,-1,1","1,-1,0","0,-1,1"],
	      "0,1":["1,0,0","1,0,1","2,0,0","2,-1,1","2,-1,0","1,-1,1"],
	      "1,-2":["-2,1,0","-2,1,1","-1,1,0","-1,0,1","-1,0,0","-2,0,1"],
	      "1,-1":["-1,1,0","-1,1,1","0,1,0","0,0,1","0,0,0","-1,0,1"],
	      "1,0":["0,1,0","0,1,1","1,1,0","1,0,1","1,0,0","0,0,1"],
	      "1,1":["1,1,0","1,1,1","2,1,0","2,0,1","2,0,0","1,0,1"],
	      "2,-2":["-2,2,0","-2,2,1","-1,2,0","-1,1,1","-1,1,0","-2,1,1"],
	      "2,-1":["-1,2,0","-1,2,1","0,2,0","0,1,1","0,1,0","-1,1,1"],
	      "2,0":["0,2,0","0,2,1","1,2,0","1,1,1","1,1,0","0,1,1"],
	      "2,1":["1,2,0","1,2,1","2,2,0","2,1,1","2,1,0","1,1,1"]},

    },
    
    computed:{
	shrunken:function(){

	    let pqab=function(m,n){
		let pairs = {pq:[],ab:[]};
		for (let p of points[m]){
		    for (let a of points[n]){
			if (profile[p].v == profile[a].v){
			    pairs.pq.push(p);
			    pairs.ab.push(a);
			}
		    }
		}
		if (pairs.pq.length==2){
		    return pairs;
		}
		else{
		    return null;
		}
	    };
	    
	    let points={};
	    let profile={};
	    let shifts={};
	    let vertices = this.choutenn;

	    for(let f in this.men){
		let xsum=0;
		let ysum=0;
		let l=0;
		for(let v of this.men[f]){
		    xsum += this.choutenn[v].x;
		    ysum += this.choutenn[v].y;
		    l++;
		}

		let mcx=xsum/l;
		let mcy=ysum/l;

		let pstr=" ";
		let idx=0;
		let face = [];
		for(let v of this.men[f]){
		    let dx=this.cont/100*(this.choutenn[v].x-mcx);
		    let dy=this.cont/100*(this.choutenn[v].y-mcy);
		    let x=(Math.cos(Math.PI*this.theta/180))*dx
			-(Math.sin(Math.PI*this.theta/180))*dy+mcx;
		    let y=(Math.sin(Math.PI*this.theta/180))*dx
			+(Math.cos(Math.PI*this.theta/180))*dy+mcy;
		    pstr += (x+" "+y+" ");
		    this.choutenn[f+idx] = {x:x, y:y};
		    profile[f+idx] = {v:v, f:f};
		    face.push(f+idx);
		    idx++;

		}
		points[f+"shrink"]=face;
	    }
	    let edges=[];
	    for (let v in profile){
		for(let w in profile){
		    if(profile[v].v == profile[w].v &&
		       this.adjacent(this.men[profile[v].f],this.men[profile[w].f])){
			edges.push([v,w]);
		    }
		    
		}
	    }


	    let makeTree=function(to, from, delta){
		console.log(to + " " + from + " " + delta.x + delta.y);
		if (shifts[to]!=null){
		    return;
		}
		else{
		    if (from == null){
			shifts[to] = {x:0,y:0};
		    }
		    else{
			shifts[to] = {x: shifts[from].x+delta.x, y: shifts[from].y+delta.y};
		    }
		}
		for (let m in points){
		    let pts = pqab(m,to);
		    if (pts!=null){
			let delta = aDelta(vertices[pts.pq[0]],
					   vertices[pts.pq[1]],
					   vertices[pts.ab[0]]
					  );
			makeTree(m,to,delta);
		    }
		}
	    };
	    
	    let aDelta = function(p,q,a){
		let d = {x:0,y:0};
		let inpr = (p.x-q.x)*(a.x-p.x) + (p.y-q.y)*(a.y-p.y);
		let dpq = (p.x-q.x)*(p.x-q.x) + (p.y-q.y)*(p.y-q.y);
		d.x = 2*(p.x-a.x) + 2*inpr/dpq*(p.x - q.x);
		d.y = 2*(p.y-a.y) + 2*inpr/dpq*(p.y - q.y);
		return d;
	    };
		
	    if (this.folded){ // 折りたたみ後の座標計算
		shifts={};
		makeTree("0,0shrink",null,0);
		console.log(shifts);
		for (let m in shifts){
		    for (let v of points[m]){
			console.log([v,shifts[v]]);
			this.choutenn[v].x -= shifts[m].x;
			this.choutenn[v].y -= shifts[m].y;
		    }
		}
	    }
	    return {men:points, hen:edges, profile:profile};

	}
    },

    

    methods:{

	adjacent:function(f,g){//tell if f and g are adjacent
	    let count=0;
	    for(let v of f){
		for(let w of g){
		    if(v == w){
			count++;
		    }
		}
	    }
	    if(count ==2){
		return true;
	    }
	    else{
		return false;
	    }

	},
	pixel:function(p){
	    return {x:p.x*100+400, y:-p.y*100+400};
	},

	points:function(f){
	    let s="";
	    for(let p of f){
		s += " "+this.choutenn[p].x+" "+this.choutenn[p].y;
	    }
	    return s;
	},

	pqab: function(m,n){
	    let pairs = {pq:[],ab:[]};
	    for (let p of this.shrunken.men[m]){
		for (let a of this.shrunken.men[n]){
		    if (this.shrunken.profile[p].v == this.shrunken.profile[a].v){
			pairs.pq.push(p);
			pairs.ab.push(a);
		    }
		}
	    }
	    if (pairs.pq.length==2){
		return pairs;
	    }
	    else{
		return null;
	    }
	},

	aDelta(p,q,a){
	    let d = {x:0,y:0};
	    let inpr = (p.x-q.x)*(a.x-p.x) + (p.y-q.y)*(a.y-p.y);
	    let dpq = (p.x-q.x)*(p.x-q.x) + (p.y-q.y)*(p.y-q.y);
	    d.x = 2*(p.x-a.x) + 2*inpr/dpq*(p.x - q.x);
	    d.y = 2*(p.y-a.y) + 2*inpr/dpq*(p.y - q.y);
	    return d;
	},
	
	fold: function(){
	    this.folded=true;
	    //for (let m in this.shrunken.men){
	    //	if (this.pqab(m,"0,0shrink")!=null){
	    //	    let pts = this.pqab(m,"0,0shrink");
	    //	    let delta = this.aDelta(this.choutenn[pts.pq[0]],
	    //				this.choutenn[pts.pq[1]],
	    //				this.choutenn[pts.ab[0]]
	    //			       );
	    //	    for (let v of this.shrunken.men[m]){
	    //		this.choutenn[v].x -= delta.x;
	    //		this.choutenn[v].y -= delta.y;
	    //	    }
	    //	}
	    //}
	},

	unfold: function(){
	    this.folded=false;
	}

    }
    
    
})
