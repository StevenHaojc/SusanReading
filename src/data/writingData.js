export const TOPICS = [
{id:"education",emoji:"📚",name:"教育类",color:"#E8735A"},
{id:"technology",emoji:"💻",name:"科技类",color:"#5B8DEF"},
{id:"media",emoji:"📺",name:"媒体类",color:"#E85DBF"},
{id:"work",emoji:"💼",name:"工作就业",color:"#F0A030"},
{id:"health",emoji:"🏥",name:"健康医疗",color:"#4ECDC4"},
{id:"city",emoji:"🏙️",name:"城市交通",color:"#7C6EE6"},
{id:"environment",emoji:"🌿",name:"环境类",color:"#2ECC71"},
{id:"culture",emoji:"🎭",name:"文化类",color:"#E74C3C"},
{id:"sports",emoji:"⚽",name:"体育类",color:"#F39C12"},
{id:"arts",emoji:"🎨",name:"艺术类",color:"#9B59B6"},
];
export const DATA = {
education:{
masterLogic:{formula:"学校目的 = 学知识 + 练能力 + 塑人格 + 适应社会",hint:"任何题目都从这 4 个角度展开，绝不跑题",parts:[{label:"学知识",desc:"学术知识与课程设置",chain:0},{label:"练能力",desc:"批判思维、沟通、自律",chain:1},{label:"塑人格",desc:"身心健康与全面发展",chain:2},{label:"适应社会",desc:"规则、责任、价值观",chain:3}]},
essayStructure:{title:"万能「折中」结构",parts:[{role:"开头",content:"承认重要 + 提出平衡"},{role:"主体1",content:"学术很重要（逻辑链1）"},{role:"主体2",content:"但能力与身心更重要（逻辑链2+3）"},{role:"结尾",content:"平衡学术与全面发展"}]},
logic_chains:[
{title:"学术成绩 / 课程设置",masterLabel:"学知识",flow:"现象 → 好处 → 结果 → 延伸",steps:[{role:"现象",cn:"学生能获取学科知识",en:"Students can acquire academic knowledge"},{role:"好处",cn:"打下扎实的学业基础",en:"build a solid academic foundation"},{role:"结果",cn:"提升学习成绩",en:"improve academic performance"},{role:"延伸",cn:"为高等教育打下基础",en:"lay the groundwork for higher education"}]},
{title:"能力培养",masterLabel:"练能力",flow:"知识 → 核心能力 → 软技能 → 竞争力",steps:[{role:"知识",cn:"培养批判性思维与解决问题能力",en:"develop critical thinking and problem-solving skills"},{role:"核心能力",cn:"提升沟通与团队合作能力",en:"enhance communication and teamwork skills"},{role:"软技能",cn:"培养自主学习与自律",en:"foster independent learning and self-discipline"},{role:"竞争力",cn:"提高就业能力与职业前景",en:"increase employability and career prospects"}]},
{title:"身心健康 / 全面发展",masterLabel:"塑人格",flow:"压力 → 恢复 → 心态 → 结果",steps:[{role:"压力",cn:"减轻学业压力与学习倦怠",en:"reduce academic pressure and study burnout"},{role:"恢复",cn:"改善身心健康",en:"improve physical and mental health"},{role:"心态",cn:"建立自信与积极心态",en:"build confidence and a positive mindset"},{role:"结果",cn:"实现全面发展",en:"achieve holistic / well-rounded development"}]},
{title:"社会化与价值观",masterLabel:"适应社会",flow:"学校 → 规则 → 品格 → 社会人",steps:[{role:"学校",cn:"学会遵守规则、尊重他人",en:"learn to follow rules and respect others"},{role:"规则",cn:"培养责任感",en:"develop a sense of responsibility"},{role:"品格",cn:"树立道德观念与社会规范",en:"acquire moral values and social norms"},{role:"社会人",cn:"成为有责任感、守法的公民",en:"become responsible and law-abiding citizens"}]},
{title:"留学的利弊 (Simon)",masterLabel:"留学",flow:"优质资源 → 独立成长 → 文化开阔 → 语言障碍",steps:[
{role:"优质资源",cn:"获得更优质的课程与师资",en:"access better courses and expert teachers abroad"},
{role:"独立成长",cn:"培养独立生活能力",en:"develop independence and life skills"},
{role:"文化开阔",cn:"接触多元文化，拓宽视野",en:"broaden horizons through cultural exposure"},
{role:"语言障碍",cn:"面临语言障碍与思乡困扰",en:"face language barriers and homesickness"}]},
{title:"教育科技利弊 (Simon)",masterLabel:"科技教育",flow:"工具赋能 → 自主学习 → 过度依赖 → 平衡使用",steps:[
{role:"工具赋能",cn:"用科技激发学习兴趣",en:"engage students with technology"},
{role:"自主学习",cn:"利用在线资源自主学习",en:"enable self-paced learning via online resources"},
{role:"过度依赖",cn:"削弱拼写、手写等基本技能",en:"weaken basic skills like spelling and handwriting"},
{role:"平衡使用",cn:"传统教学与科技手段相结合",en:"balance traditional teaching with technology"},
]}
],
negative:[{cn:"过度重视考试与分数",en:"focus excessively on exams and grades"},{cn:"忽视实践能力与创造力",en:"ignore practical skills and creativity"},{cn:"导致压力过大与心理问题",en:"lead to high pressure and mental problems"},{cn:"只用成绩评价学生",en:"judge students only by academic performance"}],
sentences:[{cn:"学校在帮助学生获取知识、培养实践能力方面至关重要。",en:"Schools play a vital role in helping students acquire knowledge and develop practical skills."},{cn:"虽然成绩重要，但也应同等关注学生的身心健康。",en:"While academic performance is important, equal attention should be paid to students' physical and mental health."},{cn:"全面的教育能让年轻人成为有责任感的社会成员。",en:"A well-rounded education enables young people to become responsible members of society."},{cn:"过度重视考试可能导致压力过大、缺乏创造力。",en:"Overemphasis on exams may lead to high pressure and a lack of creativity."}],
replacements:[{basic:"learn",advanced:"acquire knowledge"},{basic:"important",advanced:"vital / crucial"},{basic:"good for",advanced:"beneficial to"},{basic:"bad for",advanced:"detrimental to"},{basic:"study hard",advanced:"enhance academic performance"}],
},
technology:{
masterLogic:{formula:"科技 = 效率 + 便利 + 连接　但也 = 疏远 + 依赖 + 风险",hint:"所有科技题用这两条主线展开：正面 vs 负面",parts:[{label:"效率",desc:"提升效率与生产力",chain:0},{label:"连接",desc:"信息获取与全球交流",chain:1},{label:"疏远",desc:"社交退化与健康问题",chain:2},{label:"风险",desc:"就业冲击与技能更新",chain:3}]},
essayStructure:{title:"万能折中结构",parts:[{role:"开头",content:"科技带来巨大改变，有利有弊"},{role:"主体1",content:"正面（效率 + 信息 + 便利）"},{role:"主体2",content:"负面（社交 + 健康 + 就业）"},{role:"结尾",content:"合理使用，扬长避短"}]},
logic_chains:[
{title:"效率与便利",masterLabel:"效率",flow:"科技进步 → 效率提升 → 具体表现 → 宏观影响",steps:[{role:"科技进步",cn:"科技大幅提高效率与生产力",en:"Technology greatly improves efficiency and productivity"},{role:"效率提升",cn:"为个人和企业节省时间与精力",en:"It saves time and energy for individuals and companies"},{role:"具体表现",cn:"过去耗时数小时的工作几分钟就能完成",en:"Tasks that used to take hours can be finished in minutes"},{role:"宏观影响",cn:"推动社会进步与经济发展",en:"This promotes social progress and economic development"}]},
{title:"信息与连接",masterLabel:"连接",flow:"工具 → 功能 → 行为改变 → 深层价值",steps:[{role:"工具",cn:"互联网提供即时获取信息的渠道",en:"The Internet provides instant access to information"},{role:"功能",cn:"拉近人与人之间的距离",en:"It bridges the distance between people"},{role:"行为改变",cn:"人们可以在全球范围内交流合作",en:"People can communicate and cooperate globally"},{role:"深层价值",cn:"拓宽视野、丰富人生体验",en:"This broadens horizons and enriches life experiences"}]},
{title:"身心健康与社交",masterLabel:"疏远",flow:"过度使用 → 社交退化 → 心理问题 → 身体危害",steps:[{role:"过度使用",cn:"过度使用科技减少面对面交流",en:"Excessive use of technology reduces face-to-face interaction"},{role:"社交退化",cn:"可能导致社交孤立、沟通能力下降",en:"It may lead to social isolation and poor communication skills"},{role:"心理问题",cn:"还会造成成瘾、危害心理健康",en:"It also causes addiction and harms mental health"},{role:"身体危害",cn:"屏幕使用时间影响视力等身体健康",en:"Screen time affects physical health such as eyesight"}]},
{title:"就业与未来",masterLabel:"风险",flow:"技术变革 → 短期冲击 → 长期机遇 → 个人应对",steps:[{role:"技术变革",cn:"自动化与AI取代部分体力与重复性工作",en:"Automation and AI replace some manual and routine jobs"},{role:"短期冲击",cn:"导致低技能工人失业",en:"This causes unemployment for low-skilled workers"},{role:"长期机遇",cn:"但同时在科技行业创造新岗位",en:"However, it also creates new jobs in tech industries"},{role:"个人应对",cn:"人们需要更新技能以适应变化的世界",en:"People need to update skills to adapt to the changing world"}]},
{title:"互联网利弊 (Simon)",masterLabel:"网络",flow:"即时获取 → 在线服务 → 内容风险 → 信息质量",steps:[
{role:"即时获取",cn:"即时获取任何主题的信息",en:"instant access to information on any subject"},
{role:"在线服务",cn:"足不出户即可购物消费",en:"shop and access services from home"},
{role:"内容风险",cn:"暴露于不良内容，家长难以监控",en:"expose users to offensive and harmful content"},
{role:"信息质量",cn:"信息质量参差不齐，低于专业媒体",en:"lower information quality than professional media"},
]}
],
negative:[{cn:"导致对科技过度依赖",en:"lead to over-reliance on technology"},{cn:"降低独立思考与创造力",en:"reduce independent thinking and creativity"},{cn:"引发隐私泄露与安全风险",en:"cause privacy leaks and security risks"},{cn:"扩大贫富之间的数字鸿沟",en:"widen the digital divide between rich and poor"}],
sentences:[{cn:"科技彻底改变了人们的生活与工作方式。",en:"Technology has revolutionised the way people live and work."},{cn:"尽管科技带来便利，也引发了社会问题。",en:"While technology brings convenience, it also causes social problems."},{cn:"过度依赖科技会削弱我们的实践与社交能力。",en:"Over-reliance on technology weakens our practical and social skills."},{cn:"我们应明智使用科技，最大化其益处。",en:"We should use technology wisely to maximise its benefits."}],
replacements:[{basic:"good",advanced:"beneficial / advantageous"},{basic:"bad",advanced:"detrimental / harmful"},{basic:"important",advanced:"essential / indispensable"},{basic:"use",advanced:"utilise / make use of"},{basic:"more and more",advanced:"increasingly"}],
},
media:{
masterLogic:{formula:"媒体 = 信息 + 娱乐 + 影响观念　但也 = 虚假 + 诱导 + 隐私",hint:"正面（信息/娱乐/教育）+ 反面（误导/成瘾/价值观）+ 折中（监管+自律）",parts:[{label:"信息",desc:"新闻获取与公众意识",chain:0},{label:"娱乐",desc:"减压放松与家庭互动",chain:1},{label:"诱导",desc:"假新闻与审美异化",chain:2},{label:"消费",desc:"广告与消费主义",chain:3}]},
essayStructure:{title:"万能折中结构",parts:[{role:"开头",content:"媒体深刻影响生活，利弊并存"},{role:"主体1",content:"正面（信息 + 娱乐 + 教育）"},{role:"主体2",content:"负面（误导 + 成瘾 + 价值扭曲）"},{role:"结尾",content:"政府监管 + 公众提高媒介素养"}]},
logic_chains:[
{title:"信息与认知",masterLabel:"信息",flow:"渠道 → 功能 → 个人收益 → 社会收益",steps:[{role:"渠道",cn:"媒体提供即时新闻与信息获取渠道",en:"The media provides instant access to news and information"},{role:"功能",cn:"让公众了解时事与社会动态",en:"It keeps the public informed about current affairs"},{role:"个人收益",cn:"拓宽人们的视野与知识面",en:"It broadens people's horizons and knowledge"},{role:"社会收益",cn:"促进社会透明与公众意识",en:"It promotes transparency and public awareness"}]},
{title:"娱乐与放松",masterLabel:"娱乐",flow:"内容供给 → 个人减压 → 生活丰富 → 家庭纽带",steps:[{role:"内容供给",cn:"媒体提供丰富的娱乐内容",en:"Media offers a wide range of entertainment"},{role:"个人减压",cn:"帮助人们缓解压力、放松身心",en:"It helps people relieve stress and unwind"},{role:"生活丰富",cn:"丰富人们的业余生活",en:"It enriches people's leisure time"},{role:"家庭纽带",cn:"共同观看还能增进家庭互动",en:"It strengthens family time when watching together"}]},
{title:"负面影响",masterLabel:"诱导",flow:"信息失真 → 价值扭曲 → 标准异化 → 心理伤害",steps:[{role:"信息失真",cn:"媒体可能传播误导性信息与假新闻",en:"Media may spread misleading information and fake news"},{role:"价值扭曲",cn:"美化暴力与不当行为",en:"It glorifies violence and inappropriate behaviour"},{role:"标准异化",cn:"制造不切实际的审美与社会标准",en:"It creates unrealistic beauty and social standards"},{role:"心理伤害",cn:"导致焦虑、自卑与盲目攀比",en:"It leads to anxiety, low self-esteem and comparison"}]},
{title:"广告与消费主义",masterLabel:"消费",flow:"商业驱动 → 消费刺激 → 弱势群体 → 信任危机",steps:[{role:"商业驱动",cn:"广告推广商品、刺激消费",en:"Advertising promotes products and stimulates consumption"},{role:"消费刺激",cn:"鼓励不必要消费与物质主义",en:"It encourages unnecessary spending and materialism"},{role:"弱势群体",cn:"对儿童尤其有诱导性",en:"It especially influences children easily"},{role:"信任危机",cn:"用夸大宣传误导消费者",en:"It may mislead consumers with exaggerated claims"}]},
{title:"广告的正反面 (Simon)",masterLabel:"广告",flow:"经济功能 → 操控手段 → 品牌崇拜 → 监管需要",steps:[
{role:"经济功能",cn:"驱动现代商业，创造就业",en:"drive modern business and create employment"},
{role:"操控手段",cn:"操纵消费者进行不必要消费",en:"manipulate consumers into unnecessary purchases"},
{role:"品牌崇拜",cn:"利用名人效应打造品牌崇拜",en:"build brand worship through celebrity endorsement"},
{role:"监管需要",cn:"管控面向儿童与垃圾食品的广告",en:"regulate advertising targeting children and junk food"},
]}
],
negative:[{cn:"让儿童接触不良内容",en:"expose children to inappropriate content"},{cn:"塑造舆论与社会态度",en:"shape public opinion and social attitudes"},{cn:"威胁个人隐私与信息安全",en:"threaten personal privacy and data security"}],
sentences:[{cn:"媒体在塑造人们观念与生活方式上作用巨大。",en:"The media plays a significant role in shaping people's opinions and lifestyles."},{cn:"尽管媒体提供信息与娱乐，也会对青少年产生负面影响。",en:"While the media informs and entertains, it can also have negative impacts on individuals, especially the young."},{cn:"当局有必要监管媒体内容，以保护弱势群体。",en:"It is crucial for authorities to regulate media content to protect vulnerable groups."}],
replacements:[{basic:"news",advanced:"up-to-date coverage / current affairs"},{basic:"show",advanced:"depict / portray / present"},{basic:"affect",advanced:"influence / shape / impact"},{basic:"people",advanced:"the public / individuals / audiences"},{basic:"watch TV",advanced:"be exposed to the media"}],
},
work:{
masterLogic:{formula:"工作 = 收入 + 稳定 + 发展　同时 = 压力 + 平衡 + 意义",hint:"所有题目围绕 4 条线展开",parts:[{label:"收入",desc:"薪资与经济稳定",chain:0},{label:"发展",desc:"职业发展与技能提升",chain:1},{label:"压力",desc:"工作压力与生活平衡",chain:2},{label:"意义",desc:"工作满足感与社会价值",chain:3}]},
essayStructure:{title:"万能折中结构",parts:[{role:"开头",content:"工作对个人和社会都至关重要"},{role:"主体1",content:"经济保障 + 职业发展（链1+2）"},{role:"主体2",content:"压力问题 + 需要平衡（链3+4）"},{role:"结尾",content:"兼顾收入与生活质量"}]},
logic_chains:[
{title:"薪资与经济稳定",masterLabel:"收入",flow:"收入 → 养家 → 生活质量 → 独立",steps:[{role:"收入",cn:"赚取体面收入 / 稳定薪资",en:"earn a decent salary / stable income"},{role:"养家",cn:"养活自己和家人",en:"support themselves and their families"},{role:"生活质量",cn:"提高生活水平与生活质量",en:"improve living standards and quality of life"},{role:"独立",cn:"实现经济独立",en:"achieve financial independence"}]},
{title:"职业发展与技能",masterLabel:"发展",flow:"积累 → 竞争力 → 晋升 → 自我实现",steps:[{role:"积累",cn:"获得专业技能与工作经验",en:"acquire professional skills and experience"},{role:"竞争力",cn:"提升职业前景与就业竞争力",en:"enhance career prospects and employability"},{role:"晋升",cn:"获得晋升与个人成长",en:"achieve career promotion and personal growth"},{role:"自我实现",cn:"发挥潜能、实现职业抱负",en:"realise full potential and pursue ambitions"}]},
{title:"工作压力与平衡",masterLabel:"压力",flow:"工作量 → 身心反应 → 失衡 → 健康恶化",steps:[{role:"工作量",cn:"承受繁重工作量与长时间工作",en:"suffer from heavy workload and long working hours"},{role:"身心反应",cn:"面临压力、焦虑与职业倦怠",en:"experience stress, anxiety and burnout"},{role:"失衡",cn:"缺乏工作生活平衡与休闲时间",en:"lack work-life balance and leisure time"},{role:"健康恶化",cn:"损害身心健康",en:"harm physical and mental health"}]},
{title:"工作意义与社会价值",masterLabel:"意义",flow:"满足感 → 社会贡献 → 自我认同 → 社会认可",steps:[{role:"满足感",cn:"获得工作满足感与成就感",en:"gain a sense of job satisfaction and achievement"},{role:"社会贡献",cn:"为社会做贡献、创造社会价值",en:"contribute to society and create social value"},{role:"自我认同",cn:"建立自我认同与人生目标",en:"build a sense of identity and purpose"},{role:"社会认可",cn:"获得他人尊重与认可",en:"gain respect and recognition from others"}]},
{title:"跳槽 vs 稳定 (Simon)",masterLabel:"跳槽",flow:"稳定优势 → 跳槽动力 → 灵活需要 → 自主创业",steps:[
{role:"稳定优势",cn:"获得职业稳定、养老金与逐步升职",en:"gain career stability, pensions and steady promotion"},
{role:"跳槽动力",cn:"获得更高薪资与多样化经验",en:"access higher salary, broader experience and new skills"},
{role:"灵活需要",cn:"培养灵活性与多元技能组合",en:"build flexibility and diverse skill sets"},
{role:"自主创业",cn:"创业更自由但风险更高",en:"pursue self-employment with greater freedom but higher risk"},
]}
],
negative:[{cn:"就业市场竞争激烈",en:"fierce competition in the job market"},{cn:"工作不稳定、临时合同",en:"job insecurity and temporary contracts"},{cn:"不公平待遇、性别不平等",en:"unfair treatment and gender inequality"}],
sentences:[{cn:"稳定的工作给人经济保障与归属感。",en:"A stable job provides people with financial security and a sense of belonging."},{cn:"虽然高薪重要，工作满足感同样值得重视。",en:"While a high salary is important, job satisfaction should also be valued."},{cn:"长时间工作与高压损害员工健康与幸福。",en:"Long working hours and intense pressure harm employees' health and well-being."}],
replacements:[{basic:"good job",advanced:"decent / rewarding / fulfilling career"},{basic:"find a job",advanced:"secure employment / enter the workforce"},{basic:"pressure",advanced:"stress / workload / burnout"},{basic:"develop skills",advanced:"upgrade qualifications / enhance employability"}],
},
health:{
masterLogic:{formula:"健康 = 预防 + 治疗 + 公平 + 生活方式",hint:"同时 = 压力 + 不良习惯 + 资源分配问题",parts:[{label:"生活方式",desc:"饮食运动与个人健康",chain:0},{label:"公平",desc:"医疗资源与公平性",chain:1},{label:"政府",desc:"政策监管与医疗投入",chain:2},{label:"心理",desc:"心理健康与现代生活",chain:3}]},
essayStructure:{title:"万能折中结构",parts:[{role:"开头",content:"健康是个人与社会的基石"},{role:"主体1",content:"个人层面：生活方式 + 心理健康"},{role:"主体2",content:"社会层面：医疗公平 + 政府责任"},{role:"结尾",content:"预防为主，政府与个人共同努力"}]},
logic_chains:[
{title:"个人健康与生活方式",masterLabel:"生活方式",flow:"行为习惯 → 体质增强 → 疾病预防 → 心理改善",steps:[{role:"行为习惯",cn:"保持均衡饮食与规律运动",en:"maintain a healthy lifestyle / balanced diet and regular exercise"},{role:"体质增强",cn:"增强体质与免疫力",en:"boost physical fitness and strengthen the immune system"},{role:"疾病预防",cn:"降低慢性疾病的患病风险",en:"reduce the risk of chronic diseases (e.g. obesity, diabetes)"},{role:"心理改善",cn:"改善心理健康，缓解压力与焦虑",en:"improve mental well-being and reduce stress/anxiety"}]},
{title:"医疗资源与公平性",masterLabel:"公平",flow:"资源可及 → 权利保障 → 系统减负 → 差距弥合",steps:[{role:"资源可及",cn:"获得可负担、高质量的医疗服务",en:"access to affordable and high-quality healthcare"},{role:"权利保障",cn:"保障所有公民平等的就医权",en:"ensure equal access to medical treatment for all citizens"},{role:"系统减负",cn:"减轻公立医院与医疗系统的负担",en:"reduce the burden on public hospitals and healthcare systems"},{role:"差距弥合",cn:"解决贫富/城乡之间的健康不平等",en:"address health inequalities between rich and poor / urban and rural"}]},
{title:"政府责任",masterLabel:"政府",flow:"投资研究 → 宣传教育 → 政策监管 → 基础建设",steps:[{role:"投资研究",cn:"政府应投资公共医疗与医学研究",en:"governments should invest in public healthcare and medical research"},{role:"宣传教育",cn:"开展公共健康宣传，提高健康意识",en:"launch public health campaigns to raise health awareness"},{role:"政策监管",cn:"对垃圾食品、烟酒实施监管",en:"impose regulations on junk food, tobacco and alcohol"},{role:"基础建设",cn:"建设更多医院，培养更多医疗专业人员",en:"build more hospitals and train more medical professionals"}]},
{title:"心理健康",masterLabel:"心理",flow:"现代压力 → 生活失衡 → 心理恶化 → 需要支持",steps:[{role:"现代压力",cn:"因现代生活承受高压、焦虑与抑郁",en:"suffer from high stress, anxiety and depression due to modern life"},{role:"生活失衡",cn:"缺乏工作生活平衡，睡眠不足",en:"lack of work-life balance and sleep deprivation"},{role:"心理恶化",cn:"导致心理健康问题与社交孤立",en:"lead to mental health problems and social isolation"},{role:"需要支持",cn:"需要可及的心理健康服务与心理支持",en:"require accessible mental health services and psychological support"}]},
{title:"饮食与肥胖 (Simon)",masterLabel:"饮食",flow:"快餐文化 → 肥胖流行 → 疾病风险 → 政府干预",steps:[
{role:"快餐文化",cn:"过度依赖高脂高盐高糖的快餐",en:"over-rely on fast food high in fat, salt and sugar"},
{role:"肥胖流行",cn:"肥胖率上升，儿童尤为严重",en:"rising obesity rates, especially among children"},
{role:"疾病风险",cn:"加大心脏病与糖尿病风险",en:"increase risk of heart disease and diabetes"},
{role:"政府干预",cn:"推广健康饮食，禁止校园垃圾食品",en:"promote healthy eating and ban junk food in schools"},
]}
],
negative:[{cn:"不健康饮食 / 高糖高脂",en:"unhealthy diet / high in sugar and fat"},{cn:"久坐生活方式 / 缺乏运动",en:"sedentary lifestyle / lack of physical activity"},{cn:"医护人员短缺",en:"shortage of doctors and nurses / understaffed hospitals"}],
sentences:[{cn:"健康的生活方式是个人幸福与社会繁荣的基础。",en:"A healthy lifestyle is the foundation of individual well-being and social prosperity."},{cn:"政府有责任保障所有公民获得可负担的医疗服务。",en:"Governments have a responsibility to ensure that all citizens have access to affordable healthcare."},{cn:"投资预防医疗，远比患病后治疗更具成本效益。",en:"Investing in preventive healthcare is far more cost-effective than treating illnesses after they develop."}],
replacements:[{basic:"healthy",advanced:"fit / in good health"},{basic:"hospital",advanced:"healthcare facility"},{basic:"doctor",advanced:"medical professional"},{basic:"exercise",advanced:"physical activity"},{basic:"prevent",advanced:"reduce the risk of / mitigate"}],
},
city:{
masterLogic:{formula:"城市 = 机遇 + 便利 + 发展　但也 = 拥堵 + 污染 + 压力",hint:"核心矛盾：城市化带来机遇 vs 交通/环境/住房问题",parts:[{label:"城市化",desc:"人口涌入与资源紧张",chain:0},{label:"交通",desc:"拥堵与污染问题",chain:1},{label:"公交",desc:"公共交通的正面作用",chain:2},{label:"规划",desc:"城市规划解决方案",chain:3}]},
essayStructure:{title:"万能折中结构",parts:[{role:"开头",content:"城市化带来机遇也带来挑战"},{role:"主体1",content:"问题（拥堵 + 污染 + 住房）"},{role:"主体2",content:"解决（公共交通 + 城市规划）"},{role:"结尾",content:"可持续发展，提升城市生活质量"}]},
logic_chains:[
{title:"城市化问题",masterLabel:"城市化",flow:"人口涌入 → 资源紧张 → 无序扩张 → 设施超载",steps:[{role:"人口涌入",cn:"城市化导致人口过度拥挤",en:"urbanization leads to overcrowding"},{role:"资源紧张",cn:"住房短缺与高房价",en:"housing shortage and high property prices"},{role:"无序扩张",cn:"城市无序扩张",en:"urban sprawl"},{role:"设施超载",cn:"城市基础设施压力增大",en:"increasing pressure on urban infrastructure"}]},
{title:"交通问题",masterLabel:"交通",flow:"拥堵现象 → 污染加剧 → 效率损失 → 健康威胁",steps:[{role:"拥堵现象",cn:"交通拥堵已成为城市主要难题",en:"traffic congestion has become a major headache in modern cities"},{role:"污染加剧",cn:"过度依赖私家车导致空气和噪音污染",en:"over-reliance on private cars leads to air and noise pollution"},{role:"效率损失",cn:"造成时间浪费，降低工作效率",en:"cause time wastage and lower work efficiency"},{role:"健康威胁",cn:"车辆尾气排放威胁公众健康",en:"vehicle emissions threaten public health"}]},
{title:"公共交通",masterLabel:"公交",flow:"投资建设 → 减少依赖 → 绿色出行 → 生活提升",steps:[{role:"投资建设",cn:"投资公共交通是缓解拥堵的有效方式",en:"investing in public transport is an effective way to reduce traffic jams"},{role:"减少依赖",cn:"减少对私家车的依赖",en:"reduce reliance on cars"},{role:"绿色出行",cn:"推广绿色出行与低碳交通",en:"promote green commuting and low-carbon transport"},{role:"生活提升",cn:"高效公共交通提升城市生活质量",en:"efficient public transport improves the overall quality of urban life"}]},
{title:"城市规划",masterLabel:"规划",flow:"顶层设计 → 基础设施 → 经济手段 → 可持续",steps:[{role:"顶层设计",cn:"城市规划在解决交通问题上至关重要",en:"urban planning plays a key role in solving transport problems"},{role:"基础设施",cn:"修建自行车道鼓励更健康的出行",en:"building cycle lanes encourages greener and healthier commuting"},{role:"经济手段",cn:"征收拥堵费以减少私家车使用",en:"impose congestion fees to discourage car use"},{role:"可持续",cn:"实现城市可持续发展",en:"achieve sustainable urban development"}]},
{title:"步行区与道路安全 (Simon)",masterLabel:"安全",flow:"步行区建设 → 健康促进 → 驾驶安全 → 科技辅助",steps:[
{role:"步行区建设",cn:"步行区改善城市环境、吸引游客",en:"improve city environment with pedestrian zones"},
{role:"健康促进",cn:"鼓励步行骑车，减少肥胖问题",en:"encourage walking and cycling to reduce obesity"},
{role:"驾驶安全",cn:"打击疲劳驾驶、醉驾与手机驾驶",en:"combat dangerous driving: fatigue, drunk, phone use"},
{role:"科技辅助",cn:"利用测速摄像头与减速带保障安全",en:"use speed cameras and traffic calming measures"},
]}
],
negative:[{cn:"通勤时间过长",en:"long commuting time"},{cn:"停车难问题",en:"parking problems"},{cn:"恶化空气质量",en:"deteriorate air quality"}],
sentences:[{cn:"交通拥堵已成为大多数现代城市的主要难题。",en:"Traffic congestion has become a major headache in most modern cities."},{cn:"投资公共交通是缓解拥堵的有效方式。",en:"Investing in public transport is an effective way to reduce traffic jams."},{cn:"城市规划在解决交通问题上至关重要。",en:"Urban planning plays a key role in solving transport problems."}],
replacements:[{basic:"traffic jam",advanced:"traffic congestion"},{basic:"car",advanced:"private vehicle / motorised transport"},{basic:"bus/train",advanced:"public transport / mass transit"},{basic:"pollution",advanced:"vehicle emissions / traffic fumes"}],
},
environment:{
masterLogic:{formula:"环境 = 污染 + 气候 + 生态 + 责任",hint:"从污染、能源、生态、责任四个维度展开",parts:[{label:"污染",desc:"空气/水/土壤污染",chain:0},{label:"气候",desc:"化石燃料与全球变暖",chain:1},{label:"生态",desc:"物种濒危与多样性",chain:2},{label:"责任",desc:"政府立法与个人行动",chain:3}]},
essayStructure:{title:"万能折中结构",parts:[{role:"开头",content:"环境问题已成为全球性挑战"},{role:"主体1",content:"问题（污染 + 气候 + 生态）"},{role:"主体2",content:"解决（政府立法 + 科技 + 个人）"},{role:"结尾",content:"多方合作，可持续发展"}]},
logic_chains:[
{title:"污染问题",masterLabel:"污染",flow:"污染源 → 扩散途径 → 健康危害 → 生态破坏",steps:[{role:"污染源",cn:"工业排放与汽车尾气造成空气污染",en:"industrial emissions and vehicle exhaust cause air pollution"},{role:"扩散途径",cn:"有毒废物与塑料垃圾污染水和土壤",en:"toxic waste and plastic waste contaminate water and soil"},{role:"健康危害",cn:"危害公众健康，引发呼吸道疾病",en:"jeopardise public health and cause respiratory diseases"},{role:"生态破坏",cn:"破坏生态系统",en:"disrupt the ecosystem"}]},
{title:"能源与气候",masterLabel:"气候",flow:"能源消耗 → 碳排放 → 气候变化 → 解决方案",steps:[{role:"能源消耗",cn:"过度使用化石燃料加速全球变暖",en:"the overuse of fossil fuels accelerates global warming"},{role:"碳排放",cn:"碳排放增加温室气体浓度",en:"carbon emissions increase greenhouse gases"},{role:"气候变化",cn:"导致气候变化与极端天气",en:"lead to climate change and extreme weather"},{role:"解决方案",cn:"可再生能源是减少碳排放的有效途径",en:"renewable energy is an effective way to reduce carbon emissions"}]},
{title:"生态保护",masterLabel:"生态",flow:"人类活动 → 栖息地破坏 → 物种濒危 → 多样性丧失",steps:[{role:"人类活动",cn:"森林砍伐与荒漠化加剧",en:"deforestation and desertification are worsening"},{role:"栖息地破坏",cn:"自然栖息地遭到破坏",en:"natural habitats are being destroyed"},{role:"物种濒危",cn:"濒危物种面临灭绝",en:"endangered species face extinction"},{role:"多样性丧失",cn:"生物多样性丧失",en:"loss of biodiversity"}]},
{title:"政府与个人责任",masterLabel:"责任",flow:"立法约束 → 技术投入 → 意识提升 → 行为改变",steps:[{role:"立法约束",cn:"应颁布严格法律遏制工业污染",en:"strict laws should be enacted to curb industrial pollution"},{role:"技术投入",cn:"投资绿色技术与环保产业",en:"invest in green technology and green industries"},{role:"意识提升",cn:"提高公众环保意识",en:"raise public awareness of environmental protection"},{role:"行为改变",cn:"个人通过低碳生活为环保出力",en:"individuals can contribute by leading a low-carbon lifestyle"}]},
{title:"垃圾与回收 (Simon)",masterLabel:"回收",flow:"消费文化 → 垃圾增长 → 塑料危机 → 回收方案",steps:[
{role:"消费文化",cn:"一次性消费文化：用完即弃",en:"disposable consumer culture: use and throw away"},
{role:"垃圾增长",cn:"家庭垃圾激增，填埋场不堪重负",en:"growing household waste filling up landfill sites"},
{role:"塑料危机",cn:"过度使用不可降解塑料包装",en:"excessive non-biodegradable plastic packaging"},
{role:"回收方案",cn:"减少包装 + 立法限制 + 全民回收",en:"reduce packaging, enforce limits, promote recycling"},
]}
],
negative:[{cn:"耗尽自然资源",en:"deplete natural resources"},{cn:"加剧全球变暖",en:"aggravate global warming"},{cn:"过度消费与一次性塑料",en:"overconsumption and single-use plastics"}],
sentences:[{cn:"环境问题已成为全球性关注点。",en:"Environmental problems have become a global concern."},{cn:"人类活动是造成环境破坏的主要原因。",en:"Human activities are largely responsible for environmental damage."},{cn:"提高公众意识是解决环境问题的关键。",en:"Raising public awareness is the key to solving environmental issues."}],
replacements:[{basic:"pollution",advanced:"contamination / emissions"},{basic:"protect",advanced:"preserve / conserve / safeguard"},{basic:"destroy",advanced:"deplete / degrade / disrupt"},{basic:"solve",advanced:"address / combat / mitigate"}],
},
culture:{
masterLogic:{formula:"文化 = 传统 + 身份 + 传承　全球化 = 便利 + 统一 + 同质化",hint:"传统受冲击 → 需要保护 + 交流并存",parts:[{label:"交流",desc:"文化融合与国际理解",chain:0},{label:"传统",desc:"传统文化的价值",chain:1},{label:"消失",desc:"文化同质化与消亡",chain:2},{label:"保护",desc:"政府与教育的保护措施",chain:3}]},
essayStructure:{title:"万能折中结构",parts:[{role:"开头",content:"全球化/现代化带来便利与交流"},{role:"主体1",content:"但导致传统文化消失、语言濒危"},{role:"主体2",content:"政府 + 个人 + 教育共同保护"},{role:"结尾",content:"多元共存，和而不同"}]},
logic_chains:[
{title:"文化交流（正面）",masterLabel:"交流",flow:"接触融合 → 个人成长 → 经济合作 → 和平共处",steps:[{role:"接触融合",cn:"促进文化融合与国际理解",en:"promote cultural integration and global understanding"},{role:"个人成长",cn:"拓宽视野，丰富生活体验",en:"broaden people's horizons and enrich life experiences"},{role:"经济合作",cn:"推动国际贸易、旅游与跨国合作",en:"facilitate international trade, tourism and cooperation"},{role:"和平共处",cn:"培养包容心，减少偏见与冲突",en:"foster tolerance and reduce prejudice and conflicts"}]},
{title:"传统文化的价值",masterLabel:"传统",flow:"历史根基 → 情感归属 → 经济价值 → 代际传承",steps:[{role:"历史根基",cn:"代表国家历史、身份认同与价值观",en:"represent a nation's history, identity and values"},{role:"情感归属",cn:"提供归属感与文化根基",en:"provide a sense of belonging and cultural roots"},{role:"经济价值",cn:"吸引游客，促进地方经济",en:"attract tourists and promote local economy"},{role:"代际传承",cn:"向年轻一代传承智慧与习俗",en:"pass down wisdom, customs and rituals to younger generations"}]},
{title:"文化消失（负面）",masterLabel:"消失",flow:"全球化冲击 → 传统消亡 → 青年流失 → 身份危机",steps:[{role:"全球化冲击",cn:"全球化导致文化同质化/西方化",en:"globalisation leads to cultural homogeneity / westernisation"},{role:"传统消亡",cn:"传统文化与语言逐渐消亡",en:"traditional cultures and languages are gradually dying out"},{role:"青年流失",cn:"年轻人抛弃本土习俗，追捧全球潮流",en:"young people abandon local customs in favour of global trends"},{role:"身份危机",cn:"文化多样性流失威胁国家独特身份",en:"loss of cultural diversity threatens a nation's unique identity"}]},
{title:"保护文化的措施",masterLabel:"保护",flow:"政府资助 → 教育纳入 → 活动推广 → 多元共存",steps:[{role:"政府资助",cn:"政府应资助文化保护与博物馆建设",en:"governments should fund cultural preservation and museums"},{role:"教育纳入",cn:"将传统文化纳入学校课程",en:"include traditional culture in school curricula"},{role:"活动推广",cn:"举办节日活动提高公众保护意识",en:"organise festivals and events to raise public awareness"},{role:"多元共存",cn:"尊重文化差异，鼓励多元文化发展",en:"respect cultural differences and encourage multiculturalism"}]},
{title:"旅游业的双面性 (Simon)",masterLabel:"旅游",flow:"经济拉动 → 就业创造 → 环境破坏 → 可持续需要",steps:[
{role:"经济拉动",cn:"拉动地方经济，吸引跨国投资",en:"boost local economy and attract international investment"},
{role:"就业创造",cn:"在住宿交通娱乐业创造就业",en:"create jobs in hospitality, transport and entertainment"},
{role:"环境破坏",cn:"破坏自然环境，推高当地物价",en:"damage natural environment and raise local living costs"},
{role:"可持续需要",cn:"立法保护环境与文化，推广可持续旅游",en:"legislate to protect environment and local culture"},
]}
],
negative:[{cn:"语言灭绝 / 小语种消失",en:"language extinction / minority languages disappearing"},{cn:"传统技艺与手工艺流失",en:"loss of traditional skills and crafts"},{cn:"文化挪用与过度商业化",en:"cultural appropriation and commercialisation"}],
sentences:[{cn:"全球化带来了全球范围内频繁的文化交流。",en:"Globalization has brought frequent cultural exchanges around the world."},{cn:"传统文化是一个国家历史与身份的根基。",en:"Traditional culture is the root of a nation's history and identity."},{cn:"在拥抱全球化的同时保护文化多样性至关重要。",en:"It is crucial to preserve cultural diversity while embracing globalization."}],
replacements:[{basic:"culture",advanced:"cultural heritage / tradition / identity"},{basic:"protect",advanced:"preserve / safeguard / maintain"},{basic:"lose",advanced:"disappear / vanish / die out"},{basic:"difference",advanced:"diversity / variety"}],
},
sports:{
masterLogic:{formula:"体育 = 健康 + 性格 + 团队 + 国家形象",hint:"同时 = 压力 + 商业化 + 资源分配问题",parts:[{label:"健康",desc:"强身健体与生活方式",chain:0},{label:"性格",desc:"意志品质与团队精神",chain:1},{label:"国家",desc:"凝聚人心与软实力",chain:2},{label:"弊端",desc:"伤病、商业化、功利化",chain:3}]},
essayStructure:{title:"万能折中结构",parts:[{role:"开头",content:"体育对个人和社会都意义重大"},{role:"主体1",content:"个人（健康+性格）+ 国家（形象+经济）"},{role:"主体2",content:"问题（商业化+伤病+资源争议）"},{role:"结尾",content:"重视参与精神，合理分配资源"}]},
logic_chains:[
{title:"个人健康",masterLabel:"健康",flow:"运动行为 → 体质提升 → 心理改善 → 习惯养成",steps:[{role:"运动行为",cn:"改善身体健康，增强体质",en:"improve physical health and strengthen the body"},{role:"体质提升",cn:"增强免疫力，减少疾病",en:"enhance the immune system and reduce diseases"},{role:"心理改善",cn:"缓解压力，改善心理健康",en:"relieve stress and improve mental well-being"},{role:"习惯养成",cn:"养成健康积极的生活方式",en:"develop a healthy and active lifestyle"}]},
{title:"性格与团队精神",masterLabel:"性格",flow:"意志磨炼 → 协作能力 → 心态成熟 → 人格完善",steps:[{role:"意志磨炼",cn:"培养毅力、决心与意志力",en:"foster perseverance, determination and willpower"},{role:"协作能力",cn:"提升团队合作与协作能力",en:"enhance teamwork, communication and cooperation"},{role:"心态成熟",cn:"学会接受失败，尊重对手",en:"learn to accept failure and respect opponents"},{role:"人格完善",cn:"建立自信与责任感",en:"build confidence and sense of responsibility"}]},
{title:"社会与国家",masterLabel:"国家",flow:"公共健康 → 民族凝聚 → 国际形象 → 经济拉动",steps:[{role:"公共健康",cn:"提升公共健康，减轻医疗系统负担",en:"improve public health and ease the burden on healthcare"},{role:"民族凝聚",cn:"通过大型赛事增强民族凝聚力",en:"promote national pride and unity through major events"},{role:"国际形象",cn:"提升国家国际形象与软实力",en:"enhance a country's international image and soft power"},{role:"经济拉动",cn:"带动旅游、经济与国际交流",en:"boost tourism, economy and international exchanges"}]},
{title:"竞技体育问题",masterLabel:"弊端",flow:"身体代价 → 心理负担 → 商业异化 → 精神偏离",steps:[{role:"身体代价",cn:"导致严重运动损伤与健康风险",en:"cause serious physical injuries and health risks"},{role:"心理负担",cn:"给运动员带来巨大压力",en:"put excessive pressure on athletes"},{role:"商业异化",cn:"变得过度商业化、功利化",en:"become overly commercialised and money-oriented"},{role:"精神偏离",cn:"只重视奖牌，忽视参与精神",en:"focus only on winning medals rather than participation"}]},
{title:"职业体育薪资争议 (Simon)",masterLabel:"薪资",flow:"高薪合理性 → 反对声音 → 竞争本质 → 体育与政治",steps:[
{role:"高薪合理性",cn:"价值数十亿的产业，回报多年付出",en:"multi-billion industry rewarding years of dedication"},
{role:"反对声音",cn:"非必要服务，薪资或许失衡",en:"not a vital service; salaries arguably disproportionate"},
{role:"竞争本质",cn:"安全释放竞争本能，激发最佳表现",en:"channel natural competitive instinct safely"},
{role:"体育与政治",cn:"大型赛事吸引投资，应共享举办机会",en:"major events attract investment; share hosting opportunities"},
]}
],
negative:[{cn:"有限预算应优先投入教育与医疗",en:"limited budgets should be used in education and healthcare"},{cn:"过度追求胜利损害体育精神",en:"excessive focus on winning damages the true spirit of sports"}],
sentences:[{cn:"定期运动对身心健康都有益。",en:"Playing sports regularly is beneficial to both physical and mental health."},{cn:"团队运动帮助学生培养合作与沟通能力。",en:"Team sports help students develop cooperation and communication skills."},{cn:"大型国际赛事提升国家声誉与国际影响力。",en:"Major international events enhance a country's reputation and global influence."}],
replacements:[{basic:"do sports",advanced:"participate in sports / take physical exercise"},{basic:"healthy",advanced:"physically fit / in good shape"},{basic:"win",advanced:"achieve victory / claim a medal"},{basic:"game",advanced:"tournament / competition / event"}],
},
arts:{
masterLogic:{formula:"艺术 = 精神需求 + 文化传承 + 审美 + 创造力",hint:"现实 = 预算有限 + 更急需医疗教育 → 重要但要合理分配",parts:[{label:"个人",desc:"减压、审美、创造力",chain:0},{label:"社会",desc:"文化传承与城市形象",chain:1},{label:"教育",desc:"艺术课的全面发展意义",chain:2},{label:"争议",desc:"政府该不该资助艺术",chain:3}]},
essayStructure:{title:"万能折中结构",parts:[{role:"开头",content:"艺术对精神生活不可或缺"},{role:"主体1",content:"个人（审美+减压）+ 社会（文化+经济）"},{role:"主体2",content:"反方：钱应优先投医疗、教育"},{role:"结尾",content:"政府适度支持 + 社会赞助 + 学校重视"}]},
logic_chains:[
{title:"个人成长",masterLabel:"个人",flow:"审美启蒙 → 情绪疗愈 → 品质培养 → 精神丰盈",steps:[{role:"审美启蒙",cn:"培养审美能力与创造力",en:"cultivate aesthetic ability and creativity"},{role:"情绪疗愈",cn:"缓解压力与负面情绪",en:"relieve stress and negative emotions"},{role:"品质培养",cn:"培养耐心、专注力与想象力",en:"develop patience, concentration and imagination"},{role:"精神丰盈",cn:"丰富精神生活与内心世界",en:"enrich spiritual life and inner world"}]},
{title:"文化与社会价值",masterLabel:"社会",flow:"文化保护 → 社会映射 → 多元理解 → 经济驱动",steps:[{role:"文化保护",cn:"保护文化遗产与民族身份",en:"preserve cultural heritage and national identity"},{role:"社会映射",cn:"反映历史、价值观与社会问题",en:"reflect history, values and social issues"},{role:"多元理解",cn:"促进文化多样性与相互理解",en:"promote cultural diversity and mutual understanding"},{role:"经济驱动",cn:"带动旅游业与地方经济",en:"boost tourism and local economy"}]},
{title:"教育意义",masterLabel:"教育",flow:"全面发展 → 情感平衡 → 自信表达 → 反应试化",steps:[{role:"全面发展",cn:"艺术课帮助学生实现全面发展",en:"arts subjects help students achieve well-rounded development"},{role:"情感平衡",cn:"平衡学业压力与情感表达",en:"balance academic pressure with emotional expression"},{role:"自信表达",cn:"鼓励自我表达与自信心",en:"encourage self-expression and confidence"},{role:"反应试化",cn:"避免学生过度应试化",en:"prevent students from becoming too exam-oriented"}]},
{title:"政府投资争议",masterLabel:"争议",flow:"公共资助 → 大众普及 → 优先质疑 → 替代方案",steps:[{role:"公共资助",cn:"资助博物馆、美术馆与公共艺术项目",en:"fund museums, galleries and public art projects"},{role:"大众普及",cn:"让艺术面向大众",en:"make art accessible to the general public"},{role:"优先质疑",cn:"有限预算应优先医疗与教育",en:"limited budget should give priority to healthcare and education"},{role:"替代方案",cn:"艺术可依靠私人赞助与社会捐赠",en:"art can rely on private sponsorship and donations"}]},
],
negative:[{cn:"现代艺术晦涩难懂、充满争议",en:"some modern art is difficult to understand and controversial"},{cn:"艺术可能过度商业化",en:"art can be overly commercialized"},{cn:"传统艺术因全球化逐渐消亡",en:"traditional arts are dying out due to globalisation"}],
sentences:[{cn:"艺术在人们的精神文化生活中扮演不可替代的角色。",en:"Art plays an irreplaceable role in people's spiritual and cultural life."},{cn:"在校学习艺术有助于学生全面发展。",en:"Learning art at school helps students achieve well-rounded development."},{cn:"尽管艺术很有价值，公共资金也应投入基础社会需求。",en:"While art is valuable, public money should also be spent on basic social needs."}],
replacements:[{basic:"art",advanced:"artwork / creative arts / cultural heritage"},{basic:"important",advanced:"essential / vital / indispensable"},{basic:"creative",advanced:"imaginative / innovative / original"},{basic:"government money",advanced:"public funding / budget allocation"}],
},
};
