
  ʹ�÷��������������ļ�Ϊ��Ŀ¼�µ�index.html������js�Ѿ�����babelת���browserify�������index���ɼ�demoЧ����






  ��demoΪ����è������ʱ��д��ͨ��React����ع�����è���л�����ҳ�湹�ɣ��������һ��ʱ���Ϊ���ȣ���demo�Բ����ر����ƣ��ܶ�ϸ�ڴ�Ϊ��ʡʱ�䶼��δ��ӣ���ദ���ݶ�ȡ��δ���ϱ��ص�json��ʽ��reactҲ�Ǳ�ѧ��������ʱֻ����Ϥ��react��ȫ��Ͱ��react redux��react router��δѧϰ����û��ʹ������demo�ϣ���̨��Ȼ�Լ�ѧ��php��nodejs��Ҳ��ֻ��д�����򵥵������԰壬��¼ע��ϵͳ��Сdemo��Ҳ����ʱ��̫����û��д��̨����ʱ�汾�Ƚϼ�ª���������ż�����ѧϰ֮�������������demo����ȡ��ɴ��¹����걸���û��������顣











���̻����裺
1  --�ļ�����׼��
  1.1cssĿ¼����Ϊ������css��component�ļ��У�component�ļ��������css����Ҫд�������ʽ��

  1.2jsĿ¼����Ҫ��Ϊsource��biuld�ļ��У�source�ļ���Ϊԭʼjs��buildΪ����babelת���js�ļ���source��build�ļ��ж���app.js��componengt.js,app.js��ҪΪ����С�������ڣ�component����Ϊ���js��д��

  1.3��Ŀ¼�·���index.html��

  1.4��Ŀ¼����source�ļ��У������app��Ҫ�õ��ľ�̬�ļ���Դ��

2 --����
  2.1ʹ��babel���룬ʹ��babel��Ҫ������react��������;
     ����react��������Ҫ�ڸ�Ŀ¼��package.json�ļ�
     package.jsonͨ���������У�����npm init���Դ���
     �ֶ���д���⣬������package.json֮�󡣰�װreact������
     ����Ϊ��
	npm install --save-dev react  (--save-devд��package.json��˼)
        npm install --save-dev react-dom 
        npm install --save-dev babel-preset-react
	npm install --save-dev babel-preset-es2015.

	ͨ��babel����תΪes5�����Ŀ¼��ִ�У�
	��babel --preset react,es2015 js/source -d js/build
 	(ת�����Ϊ��ӵ�react��es2015����js/sourceĿ¼������js�ļ�ת��	js/build�ļ�������)

	��������ע�⣡�������ڵ���babel����ǰ�������½�babel�������ļ�.babelrc
	���������{
	    "presets": [
 	     "es2015","react",	    ],
	    "plugins": []
  	}
	

	����es2015��reactΪ�������

3 --���ת����js�ļ�
    ��browserify,����Ϊ
    ��browserify js/build/app.js -o bundle.js
    (���js/build�е�app.js�����ΪӦ����ڣ������һ��bundle.js�ڸ�Ŀ¼��)

  --���cssͬ��css�����������������ֶ����Ϊbundle.css
    ���ڸ�Ŀ¼�¡�

4 --index.html������bundle.css��bundle.js����

��˵���԰�babelrc�������ļ���д��packjason����������ʧ���ˡ�Ŀǰ�������׷������պ���˵������webpack��ʹ����ѧ�����ˡ�


 2017/4/20 




state��props�Ĵ�ӣ���es6��
class  ?? extends React.Component{()}���Ѿ�û��
getinitistate������Ҳû��getdefaultprops��propTypes����
����es6��ʹ��
state�Ļ�: 
constructor(props){
super(props);
this.state={ss:'xx',}
}}����

Ĭ��prop��prop��

static defaultPorps={
x:'123',
y:'312',

}

static propTypes={
x:React.PropTypes.bool.isRequired,
 y: React.PropTypes.number.isRequired,

}

2017/4/26


