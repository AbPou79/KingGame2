/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as createAstro, f as renderComponent } from '../chunks/astro/server_CMFNTK8X.mjs';
import 'kleur/colors';
import { h as hasProfile, $ as $$Layout } from '../chunks/profile_kB-ACRko.mjs';
import 'clsx';
import { readdirSync } from 'fs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$GameCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GameCard;
  const { title, description, imageSrc, dayAbility, nightAbility, group } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-2xl"> <!-- Image Section --> <div class="relative w-full h-64 overflow-hidden bg-gray-700"> <img class="object-cover"${addAttribute(imageSrc, "src")}${addAttribute(title, "alt")}> </div> <!-- Content Section --> <div class="p-5"> <div class="bg-blue-500 text-white text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1 inline-block mb-3">
گروه : ${group} </div> <h2 class="text-2xl font-bold text-white text-center mb-3">${title}</h2> <p class="text-gray-400 text-sm text-center mb-4">${description}</p> <!-- Abilities Section --> <div class="bg-gray-700 rounded-lg p-4"> <h3 class="text-lg font-semibold text-purple-400 text-center mb-2">Abilities</h3> <!-- Day Ability --> <div class="mb-3"> <h4 class="text-sm font-bold text-yellow-300 mb-1">Day Ability</h4> <p class="text-gray-300 text-sm">${dayAbility}</p> </div> <!-- Night Ability --> <div> <h4 class="text-sm font-bold text-blue-300 mb-1">Night Ability</h4> <p class="text-gray-300 text-sm">${nightAbility}</p> </div> </div> <!--<button class="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-300">--> <!--    Learn More--> <!--</button>--> </div> </div>`;
}, "/home/john/Documents/projects/Farzan-Game/King-Game-Intro/src/components/GameCard.astro", void 0);

const roles = [
	{
		group: "کینگ",
		name: "پادشاه",
		description: "پادشاه بر تخت سلطنت خود تکیه زده بود بی خبر از اینکه دشمنان زیادی در خارج یا داخل قلعه ی او نفوذ کرده و امنیت سرزمین را تهدید می کنند.اما دیر یا زود متوجه می شود که سرزمینش در حال فروپاشیست و باید در مقابله این دشمنان بایستد.",
		day_ability: "پادشاه در کل بازی یک بار می تواند یک نفر را که با اکثریت آرای بازیکنان در حال اعدام شدن است را با فرمان آزادی در بازی نگه دارد.پادشاه همچنین می تواند یکبار در طول بازی از حکم اعدام روز استفاده کند(از روز سوم به بعد) و با اعلام این جمله که من پادشاه بازی هستم یک نفر با هر نقشی را از بازی اخراج کند یا اصطلاحا حکم اعدام بدهد.اگر این دو توانایی توسط کینگ استفاده نشود اگر کسی حکومت را به دست بگیرد می تواند از این توانایی ها استفاده کند.",
		night_ability: "پادشاه هر شبی که بیدار می شود سه نفر را به گرداننده نشان می دهد که یک نفر از آن ها را به اعدام محکوم می کند. گرداننده این سه نفر را در همان شب به جلاد بازی نشان می دهد جلاد یک نفر از سه نفر را انتخاب می کند اگر آن شخص حکم اعدام کینگ را گرفته باشد صبح روز بعد با هر نقشی ، حتی مستقل های نامیرا در فاز شب به جز عفریته ، از بازی خارج می شود و گرداننده به همه بازیکنان اعلام می کند که این شخص حکم اعدام کینگ و جلاد گرفته است."
	},
	{
		group: "کینگ",
		name: "ملکه",
		description: "جانشین پادشاه است او در قلعه به دنبال پادشاه می گردد تا نابسامانی سرزمین را به پادشاه گوشزد کند.هنگامی که او پادشاه را پیدا کرد سعی می کند جلاد را در قلعه پیدا کرده و نزد پادشاه بیاورد تا آن ها متجاوزین را به سزای اعمالشان برسانند.",
		day_ability: "ندارد",
		night_ability: "ملکه هر شبی که بیدار می شود به یک نفر اشاره می کند تا پادشاه را بیابد.اگر پادشاه را پیدا کند به همراه او بیدار شده و همدیگر را می شناسند.سپس باید به دنبال جلاد بگردد تا بتواند او را پیدا و با پادشاه بیدار کند.اگر پادشه از بازی بیرون رود و ملکه در بازی باشد ملکه جانشین پادشاه خواهد شد.اگر به جلاد قبل از کینگ اشاره کند اعلام کودتای جلاد و ملکه خواهد شد."
	},
	{
		group: "کینگ",
		name: "لرد",
		description: "لرد از دوستان مورد اطمینان کینگ از کودکی تا کنون بوده است.او جنگجویی بی همتاست.شمشیر جادویی کریستال که در یک ماجراجویی آن را به دست آورده می تواند توانایی های افراد دوست یا دشمن را به خودشان برگرداند.",
		day_ability: "ندارد",
		night_ability: "لرد هر شبی که بیدار می شود به یک نفر اشاره می کند شخص اشاره شده هر زمان از توانایی خود استفاده کند توانایی به خود شخص بازمی گردد."
	},
	{
		group: "کینگ",
		name: "جلاد",
		description: "جلاد در بازی مامور اعدام افرادیست که توسط پادشاه حکم اعدامشان صادر گردیده او وفادار به پادشاهیست اما از گذشته عشقی پنهان نسبت به ملکه دارد. ",
		day_ability: "ندارد",
		night_ability: "جلاد هر شبی که بیدار می شود گرداننده سه نفر را به او نشان می دهد جلاد باید سعی کند شخصی از این سه نفر که توسط پادشاه حکم اعدام گرفته است را انتخاب کند تا آن شخص اعدام شود."
	},
	{
		group: "کینگ",
		name: "پزشک سلطنتی",
		description: "پزشک سلطنتی از خادمان قصر ملکه بوده که به دلیل توانایی بی نظیرش در طبابت به این مقام رسیده او مدارک پزشکی تمامی درباریان از جمله کینگ – گارد سلطنتی – وزیران جنگ ، درمان و خائن – و همین طور اِلف سفید که در میان درباریان نفوذ کرده را در اختیار دارد.",
		day_ability: "ندارد",
		night_ability: "پزشک سلطنتی هر شبی که بیدار می شود می تواند یک نفر را از ترور نجات دهد."
	},
	{
		group: "کینگ",
		name: "قدیس",
		description: "قدیس شخصیست که از کودکی در صومعه بزرگ شده تا بتواند از قدرت خدادادی خود علیه نیروی سیاه ساحره ها و شیاطین استفاده کند.",
		day_ability: "ندارد",
		night_ability: "هر شبی که بیدار می شود به یک نفر اشاره می کند اگر آن شخص تحت تاثیر نیروی ساحره باشد پاک خواهد شد و اگر خود ساحره را نشانه بگیرد ساحره از بازی بیرون خواهد رفت و اهریمن بیدار نخواهد شد.کارت قدیس فقط در بازی هایی قرار خواهد گرفت که در آن اهریمن وجود داشته باشد."
	},
	{
		group: "کینگ",
		name: "وزیر جنگ",
		description: "وزیران جنگ و درمان از وزیران قدرتمند پادشاهی هستند که در طول سلطنت کینگ بر سرزمین وفاداریشان نسبت به کینگ سست شده و روی لبه ی تیغ خیانت و وفاداری گام خواهند برداشت.",
		day_ability: "ندارد",
		night_ability: "در شب اولی که بیدار می شوند یکی از زیر دستان خود را به عنوان فرمانده اول برمی گزینند و به او دستور قتل یکی از بازیکنان را می دهند.شب بعدی که بیدار شوند باید به فرمانده ی دوم خود دستور بدهند و نمی توانند از توانایی یک فرمانده پشت هم استفاده کنند و همین طور این روند ادامه پیدا می کند.اگر دو زیر دست وزیر از بازی خارج شوند وزیر می تواند توانایی آنها را به صورت یک در میان اجرا کند."
	},
	{
		group: "کینگ",
		name: "شوالیه",
		description: "شوالیه اما در مقابل دشمن سر سختی برای نقش های سیاه مخصوصا اژدها در بازیست.",
		day_ability: "ندارد",
		night_ability: "هر شبی که بیدار می شوند گرداننده به آنها دستور وزیرشان را ابلاغ خواهد کرد آنها می توانند آن دستور را بپذیرند و اجرا کنند یا اینکه قبول نکنند و شخص دیگری را مورد حمله قرار دهند.هر زیر دست یک خنجر خیانت دارد که وقتی به مقام وزارت برسد می تواند به استفاده از آن خنجر به کینگ حمله کند.اگر خنجر خیانت کینگ را از پا دراورد و ملکه در بازی نباشد آن زیر دست تبدیل به کینگ می شود."
	},
	{
		group: "کینگ",
		name: "پزشک معمولی",
		description: "پزشک معمولی پزشکی است که وظیفه ی نجات افراد ساید کینگ به عهده ی اوست",
		day_ability: "ندارد",
		night_ability: "هر شبی که بیدار می شوند گرداننده به آنها دستور وزیرشان را ابلاغ خواهد کرد آنها می توانند آن دستور را بپذیرند و اجرا کنند یا اینکه قبول نکنند و شخص دیگری را مورد حمله قرار دهند.هر زیر دست یک خنجر خیانت دارد که وقتی به مقام وزارت برسد می تواند به استفاده از آن خنجر به کینگ حمله کند.اگر خنجر خیانت کینگ را از پا دراورد و ملکه در بازی نباشد آن زیر دست تبدیل به کینگ می شود."
	},
	{
		group: "کینگ",
		name: "کیمیاگر",
		description: "کیمیاگر اما متخصص ساخت انواع سم سیاه کش و سفید کش است که می تواند هم با خائنین و هم با نقاش سیاه مقابله کند.انتخاب اینکه از چه سمی استفاده با خود اوست و وزیر درمان نمی تواند دستوری در انتخاب سم به او بدهد.",
		day_ability: "ندارد",
		night_ability: "هر شبی که بیدار می شوند گرداننده به آنها دستور وزیرشان را ابلاغ خواهد کرد آنها می توانند آن دستور را بپذیرند و اجرا کنند یا اینکه قبول نکنند و شخص دیگری را مورد حمله قرار دهند.هر زیر دست یک خنجر خیانت دارد که وقتی به مقام وزارت برسد می تواند به استفاده از آن خنجر به کینگ حمله کند.اگر خنجر خیانت کینگ را از پا دراورد و ملکه در بازی نباشد آن زیر دست تبدیل به کینگ می شود."
	},
	{
		group: "کینگ",
		name: "کماندار",
		description: "کماندار با تیر خود می تواند افراد کینگ را از بازی بیرون کند که هم برای خیانت و هم برای قتل خیانت کاران مورد استفاده قرار می گیرد",
		day_ability: "ندارد",
		night_ability: "هر شبی که بیدار می شوند گرداننده به آنها دستور وزیرشان را ابلاغ خواهد کرد آنها می توانند آن دستور را بپذیرند و اجرا کنند یا اینکه قبول نکنند و شخص دیگری را مورد حمله قرار دهند.هر زیر دست یک خنجر خیانت دارد که وقتی به مقام وزارت برسد می تواند به استفاده از آن خنجر به کینگ حمله کند.اگر خنجر خیانت کینگ را از پا دراورد و ملکه در بازی نباشد آن زیر دست تبدیل به کینگ می شود."
	},
	{
		group: "کینگ",
		name: "وزیر درمان",
		description: "وزیران جنگ و درمان از وزیران قدرتمند پادشاهی هستند که در طول سلطنت کینگ بر سرزمین وفاداریشان نسبت به کینگ سست شده و روی لبه ی تیغ خیانت و وفاداری گام خواهند برداشت.",
		day_ability: "ندارد",
		night_ability: "در شب اولی که بیدار می شوند یکی از زیر دستان خود را به عنوان فرمانده اول برمی گزینند و به او دستور قتل یکی از بازیکنان را می دهند.شب بعدی که بیدار شوند باید به فرمانده ی دوم خود دستور بدهند و نمی توانند از توانایی یک فرمانده پشت هم استفاده کنند و همین طور این روند ادامه پیدا می کند.اگر دو زیر دست وزیر از بازی خارج شوند وزیر می تواند توانایی آنها را به صورت یک در میان اجرا کند."
	},
	{
		group: "اویل",
		name: "اویل",
		description: "از اوباش قلمرو پادشاهی بوده که از قلمرو فرار کرده و با گروهی از اوباش در پی انتقام از پادشاهیست...",
		day_ability: "ندارد",
		night_ability: "شبهای زوج بیدار می شود و توانایی این را دارد که یک نفر از افراد دشمن را به قتل برساند.اِویل می تواند کسی که می خواد به قتل برساند را با استفاده از راهنمایی وزیر خائن انتخاب کند."
	},
	{
		group: "اویل",
		name: "وزیر خائن",
		description: " از اوباش قلمرو پادشاهی بوده و با گروهی از اوباش در پی انتقام از پادشاهیست او به پادشاهی بازگشته تا به عنوان نفوذی بتواند به اِویل در راهبرد نقشه هایشان کمک کند. ",
		day_ability: "ندارد",
		night_ability: " او دربار پادشاهی را می شناسد.شبهای زوج بیدار می شود و باید تلاش کند افراد دربار را در شب های زوج به اِویل راهنمایی کند.اگر اِویل از بازی خارج شود وزیر خائن شب های زوج یک نفر را به قتل می رساند ولی اگر وزیر خائن هم از بازی خارج شود تیم اِویل دیگر شب های زوج نمی تواند کسی را به قتل برساند.اگر اژدها و رییس صومعه از بازی خارج شوند توانایی آنها به وزیر خائن نخواهد رسید."
	},
	{
		group: "اویل",
		name: "جادوگر",
		description: "از اوباش قلمرو پادشاهی بوده و با گروهی از اوباش در جنگل اسرار آمیز آشنا می شود و پی انتقام از پادشاهیست او جادوی درمانگری را در جنگل آموخته و برای درمان تیمش از آن استفاده می کند. ",
		day_ability: "ندارد",
		night_ability: " هر شب فرد بیدار می شود و مانند پزشک یکی از افراد تیمش را از مرگ نجات می دهد."
	},
	{
		group: "اویل",
		name: "دارک نایت",
		description: " از اوباش قلمرو پادشاهی بوده و او در قلمرو پادشاهی جنگاوری آموخته اما قسم خورده که اِویل را در رسیدن به هدفش کمک خواهد کرد.",
		day_ability: "ندارد",
		night_ability: "هر شب فرد بیدار می شود و مانند نیروهای وزیر جنگ یه نفر را به قتل می رساند.برای او تفاوتی ندارد که کسی که به قتل می رسد نقش سیاه است یا سفید.او تنها توانایی به قتل رساندن افرادی را ندارد که در شب نامیرا هستند."
	},
	{
		group: "اویل",
		name: "رئیس صومعه",
		description: "او از کودکی به یتیم خانه ی صومعه فرستاده شده تا در زمان حمله ناقوس کلیسا را به صدا در نیاورد و اژدها بتواند به راحتی از مرز قلمرو عبور کند.",
		day_ability: " اگر رییس صومعه در روز رای خروج بگیرد رییس صومعه باید قبل از خارج شدن از بازی یک نفر را انتخاب کند و اژدها موظف است او را از بازی بیرون ببرد.در اصل با کشته شدن رییس صومعه دو نفر از تیم اِویل از بازی خارج خواهد شد و یک شخص دیگر.",
		night_ability: "اژدها هر شب یک نقش از نقش های بازی را که در ادامه ذکر خواهد شد از گرداننده خواهد گرفت و رییس صومعه از آن توانایی استفاده خواهد کرد.رییس صومعه در صورت بیرون رفتن اژدها توانایی شب را خود انتخاب می کند."
	},
	{
		group: "تیم رعیت",
		name: "اهنگر",
		description: "او رعیتی است که از کودکی در آهنگری به سختی کار می کرده و اکنون آهنگری زبده و سرشناس در میان مردم است.آهنگر سر مستقل تیم رعیت است و با بیرون رفتن او تمام تیم رعیت به جز یارهای خریداری شده از بازی بیرون خواهند رفت.آهنگر فقط قبل از خروج از بازی می تواند از سلاحش استفاده کند",
		day_ability: "ندارد",
		night_ability: "او هر شب زوج بیدار می شود و یک سلاح از بین سلاح های زیر می سازد و آن را به سلحشور می دهد تا بین اعضای تیم تقسیم کند:\nشمشیر شوالیه : سیاه کُش\nکمان کماندار : سفید کُش\nتبر جلاد : مستقل کُش\nشمشیر دارک نایت : سیاه و سفید کُش به جز مستقل ها"
	},
	{
		group: "تیم رعیت",
		name: "سلحشور",
		description: "سلحشور یکی از جنگاوران رعیت هاست که سلاح های ساخته شده به دست آهنگر را بین رعیت ها تقسیم می کند.اگر او از بازی بیرون رود ابتدا رعیت ها و اگر رعیتی در بازی نبود آهنگر وظیفه ی او را به عهده خواهد گرفت. ",
		day_ability: "ندارد",
		night_ability: "او هر شب زوج بعد از آهنگر بیدار می شود و سلاح ساخته شده را بین اعضای تیم تقسیم می کند و توانایی دیگری ندارد."
	},
	{
		group: "تیم رعیت",
		name: "رعیت ساده",
		description: "رعیت های ساده هیچ توانایی به جز استفاده از سلاح آهنگر ندارند.آن ها برای تقسیم سلاح با سلحشور بیدار می شوند.رعیت ساده و سلحشور که اسلحه داشته باشد هنگام فاز روز یا فاز شب و یا حتی بعد از خروج از بازی در روز و شب هم می تواند از اسلحه خود استفاده کند.اما در فاز روز و شب فقط یکی از آن ها می تواند از سلاح خود استفاده کند. ",
		day_ability: "ندارد",
		night_ability: "ندارد",
		special: {
			name: "شورش رعیت",
			desc: " در آخرین شبی که آهنگر با اسلحه ای که می سازد همه ی اعضای تیم رعیت را مسلح کند در صورت اجازه ی سلحشور اعلام شورش رعیت خواهد شد.در شبی که شورش رعیت اتفاق می افتد هیچ نقشی هیچ توانایی نخواهد داشت فقط اعضای تیم رعیت از سلاح های خود استفاده می کنند.آهنگر به تنهایی توانایی شورش رعیت ندارد."
		}
	},
	{
		group: "تیم اِلف",
		name: "الف سرخ",
		description: "سر دسته تیم الف هاست که جاسوسانی هم در تیم پادشاهی و هم در تیم اویل دارد.با بیرون رفتن او تمام تیم الف ها از بازی بیرون می رود.",
		day_ability: "ندارد",
		night_ability: " او هر شب زوج دو توانایی دریافت می کند که یکی توسط الف سفید دزدیده شده و یکی توسط الف سیاه و می تواند از هر دو توانایی استفاده کند."
	},
	{
		group: "تیم اِلف",
		name: "الف سفید",
		description: "یکی از جاسوسان الف سرخ در دربار پادشاهیست که در شب معارفه همراه با پادشاه،گارد سلطنتی،وزیر جنگ،وزیر درمان و وزیر خائن بیدار می شود",
		day_ability: "ندارد",
		night_ability: "او هر شب زوج به یکی از افرادی که در شب معارفه دیده اشاره می کند و توانایی او را برای الف سرخ می دزدد"
	},
	{
		group: "تیم مصریان",
		name: "فرعون",
		description: "سر دسته تیم مصریان است.فرعون یک سلاح قدرتمند باستانی به نام \"داس مرگ\" در اختیار دارد...",
		day_ability: "فرعون می تواند از داس مرگ در روز استفاده کند...",
		night_ability: "او در شب های زوج از توانایی که کاهن برای او به دست آورده استفاده خواهد کرد."
	},
	{
		group: "تیم وایکینگ ها",
		name: "اسلحه ساز",
		description: "سر دسته تیم وایکینگ هاست که تبر هایی به رنگ سرخ ، سیاه و سفید می سازد...",
		day_ability: "ندارد",
		night_ability: "او هر شب زوج دو جعبه ی اسلحه خواهد ساخت که در هر جعبه دو تبر با رنگ های غیر همسان قرار دارد به طور مثال :\n\n\n  که به ترتیب : \nتبر سرخ ، تبر سیاه را شکست خواهد داد.\nتبر سیاه ، تبر سفید را شکست خواهد داد.\nتبر سفید ، تبر سرخ را شکست خواهد داد.\n"
	},
	{
		group: "تیم وایکینگ ها",
		name: "نورس",
		description: "یکی از بهترین جنگاوران وایکینگ هاست که به کمک وایکینگ ساده جعبه های ساخته شده توسط اسلحه ساز را بین دو نفر از بازیکنان تقسیم خواهد کرد.",
		day_ability: "ندارد",
		night_ability: "او هر شب زوج به همراه وایکینگ ساده از خواب بیدار می شود و جعبه های ساخته شده توسط اسلحه ساز را بین دو بازیکن تقسیم خواهند کرد ( می تواند یکی از آن دو نفر از خود وایکینگ ها باشد).دو بازیکن انتخاب شده در روز در نبردی که گرداننده اعلام خواهد کرد باید یک اسلحه از جعبه ی خود انتخاب کنند و سپس منتظر اعلام گرداننده برای نتیجه ی مبارزه شوند. در صورت هم رنگ بودن اسلحه ها نبرد مساوی اعلام شده و هر دو بازیکن انتخاب شده به بازی ادامه می دهند.دو بازیکن می توانند بسته به تصمیم گرداننده گاهی ،قبل از مبارزه با هم،به مدت سی ثانیه حق صحبت داشته باشند که این مکالمه باید در مقابل تمام بازیکنان صورت پذیرد.انتخاب اسلحه برای هر دو بازیکن در شب موقت انجام خواهد شد."
	},
	{
		group: "تیم وایکینگ ها",
		name: "وایکینگ ساده",
		description: "یکی از وایکینگ های شجاع است که هراسی از مرگ ندارد.او تبری جادویی به رنگ آبی دارد.",
		day_ability: "وایکینگ ساده در روز هر زمان بخواهد می تواند یک بازیکن را انتخاب کند و او را با تبر آبی بکشد اما جادوی تبر او به گونه ایست که خود او نیز کشته خواهد.حتی نقش های نمیر شب هم با تبر وایکینگ ساده کشته خواهند شد.",
		night_ability: "او هر شب زوج به همراه وایکینگ ساده از خواب بیدار می شود و جعبه های ساخته شده توسط اسلحه ساز را بین دو بازیکن تقسیم خواهند کرد."
	},
	{
		group: "کینگ",
		name: "پاپ",
		description: "پاپ در قدیم رییس صومعه بوده در یکی از ماجراجویی های خود که گارد سلطنتی او را همراهی می کرد زمانی که هر دو تا حد مرگ زخمی شده بودند چشمه ی آبی پیدا کرده که افرادی که در مرز زندگی و مرگ قرار دارند را به زندگی باز خواهد گرداند. وی بعد از بازنشسته شدن از کار کلیسا به احیای جان مردم پادشاهی پرداخت.",
		day_ability: "ندارد",
		night_ability: "هر شب به جز شب هایی که \"مرگ\" می خواهد یک نفر را همراه خود بیدار کند توسط گرداننده بیدار می شود.گرداننده کشته های شب را به او نشان می دهد او یک نفر از کشته ها را در بازی نگه خواهد داشت.اما فقط یک بار می تواند هر شخص را در بازی نگه دارد.گارد سلطنتی و پاپ به این دلیل که قبلن از آب چشمه ی حیات نوشیده اند دیگر نمی توانند نجات پیدا کنند."
	},
	{
		group: "کینگ",
		name: "گارد سلطنتی",
		description: "گارد سلطنتی جز تنها خادمان وفادار پادشاه است چرا که از کودکی به کمک پدر پادشاه از مرگ نجات پیدا کرده و در قصر تمامی آموزش های جنگاوری را فرا گرفته.او قسم خورده که تا قطره ی آخر خونش از خاندان پادشاهی دفاع کند.",
		day_ability: "اگر کینگ بازی در روز توسط رای گیری بخواهد از بازی بیرون رود.با گرفتن رای خروج گارد سلطنتی به جای کینگ از بازی بیرون خواهد رفت و کینگ همراه با اعلام نقش در بازی خواهد ماند.",
		night_ability: "گارد سلطنتی توانایی برای استفاده در شب ندارد اما تا زمانی که در بازیست هر نقشی که نمیر شب نباشد اگر پادشاه را در شب مورد حمله قرار دهد گارد سلطنتی او را خواهد کشت."
	},
	{
		group: "اویل",
		name: "اژدها",
		description: "او یک موجود افسانه ای و داناست که توسط طلسمی زندانی اِویل شده و مجبور به پیشبرد اهداف پلید اوست.",
		day_ability: "اگر اژدها در شب کشته شود فردا قبل از اعلام کشته ها توسط گرداننده اژدها باید پیش از خارج شدن از بازی یک نفر را انتخاب کند و او را همراه خود از بازی بیرون ببرد.حتی اگر اژدها در روز رای خروج بگیر و از بازی خارج شود نیز یک نفر را با خود خواهد برد.اگر اژدها توسط شمشیر شوالیه کشته شود دیگر کسی را از بازی بیرون نخواهد برد و نقش اژدها نیز در روز اعلام نخواهد شد.",
		night_ability: "اژدها هر شب یک نقش از نقش های بازی را که شامل توانایی شوالیه ، کماندار ، جلاد ، دارک نایت ، جادوگر ، پزشک و کیمیاگر را از گرداننده خواهد گرفت و رییس صومعه از آن توانایی استفاده خواهد کرد.اژدها در صورت بیرون رفتن رییس صومعه توانایی شب را خود انتخاب می کند."
	},
	{
		group: "مستقل",
		name: "مرگ",
		description: " او فرمانده یکی از شهرهای مرزی پادشاهی بود تا زمانی که در یکی از حملات تیم اویل اسیر و سپس کشته شد.از جهان پس از مرگ عبور کرد و برای انتقام به دنیا برگشت تا تمام پادشاهی و گروه اویل را از میان بردارد.",
		day_ability: "ندارد",
		night_ability: "مرگ سه نفر را در طول بازی از مردن نجات می دهد و به تیم خود می افزاید.این سه نفر با توانایی خود به مرگ کمک می کنند.مرگ نامیراست تا شبی که تصمیم بگیرد اولین نفر را بیدار کند از آن به بعد نامیرایی مرگ از بین میرود.مرگ مستقلی از بازیست که اگر پادشاه شده باشد با کشته شدن در روز پادشاهی را واگذار نمیکند و این اتفاق تنها در شب می افتد همچنین اگر مرگ از بازی بیرون رود یاران خریداری شده او در بازی می مانند.مرگ نمی تواند سرکرده های مستقل را خریداری کند.این نقش در شبی که بخواد کسی را بیدار کند قبل از فاز روز به گردانده علامت می دهد.گرداننده او را آخرین نقش بیدار می کند و کشته های آن شب را به او نشان می دهد و او یکی را خریداری می کند. در هر شبی که مرگ تصمیم می گیرد کسی را بیدار کند اگر کشته ای نداشته باشیم یا کسی که انتخاب شده سر مستقل باشد یکی از سه توانایی مرگ از بین می رود."
	},
	{
		group: "الف",
		name: "الف سیاه",
		description: " یکی از جاسوسان الف سرخ در دربار اویل است که در شب معارفه همراه با اویل،دارک نایت،جادوگر و وزیر خائن بیدار می شود.",
		day_ability: "ندارد",
		night_ability: "او هر شب زوج به یکی از افرادی که در شب معارفه دیده اشاره می کند و توانایی او را برای الف سرخ می دزدد."
	},
	{
		group: "مصریان",
		name: "مومیایی",
		description: "او یکی از زیر دستان فرعون است که با جادویی از گور برخواسته و به زودی دوباره به دنیای مردگان باز می گردد. جاسوسی جادویی و مرموز است که نقش بازیکنان را در کنار گرداننده خواهد دید!!!",
		day_ability: "ندارد",
		night_ability: "توانایی او در هر شبی  است که کشته شود یا به خواست خودش به گرداننده علامت دهد .گرداننده در روز او را از بازی همراه با کشته ها خارج خواهد کرد.او شب بعد بازی را از بیرون خواهد دید و روز دیگر دوباره با اعلام گرداننده به بازی باز خواهد گشت.او یک روز و یک شب در بازی خواهد بود و پس از آن از بازی بیرون خواهد رفت (تا پایان بازی).او در شب قبل از بیرون رفتن می تواند مدت زمانی کوتاهی به کاهن مشورت بدهد."
	},
	{
		group: "مصریان",
		name: "کاهن",
		description: "یکی از افراد با نفوذ در بازی است که با تطمیع کردن بازیکنان توانایی آنها را از آن ها خواهد گرفت.",
		day_ability: "ندارد",
		night_ability: "او در شبهای زوج با تطمیع کردن بازیکنان توانایی آنها را خواهد گرفت و در اذای تواناییشان به آنها یک درمان پزشک معمولی یا یک سم کیمیاگر خواهد داد (بازیکنان انتخابی توسط کاهن توانایی خود را به مدت یکبار از دست می دهند)."
	}
];
const roles$1 = {
	roles: roles
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const imageFolder = "./public/";
  const imageFiles = readdirSync(imageFolder);
  const cookie = `${Astro2.cookies.get("_Security_Login_")?.value}`;
  const d = hasProfile(cookie, "secret");
  if (d.success === false) {
    return Astro2.redirect("/login");
  }
  function findDescriptionForRole(imageName) {
    const normalizedImageName = imageName.trim().normalize("NFC");
    const role = roles$1.roles.find(
      (role2) => role2.name.trim().normalize("NFC") === normalizedImageName
    );
    return role ? role : {
      "group": "اویل",
      "name": "اژدها",
      "description": "او یک موجود افسانه ای و داناست که توسط طلسمی زندانی اِویل شده و مجبور به پیشبرد اهداف پلید اوست.",
      "day_ability": "اگر اژدها در شب کشته شود فردا قبل از اعلام کشته ها توسط گرداننده اژدها باید پیش از خارج شدن از بازی یک نفر را انتخاب کند و او را همراه خود از بازی بیرون ببرد.حتی اگر اژدها در روز رای خروج بگیر و از بازی خارج شود نیز یک نفر را با خود خواهد برد.اگر اژدها توسط شمشیر شوالیه کشته شود دیگر کسی را از بازی بیرون نخواهد برد و نقش اژدها نیز در روز اعلام نخواهد شد.",
      "night_ability": "اژدها هر شب یک نقش از نقش های بازی را که شامل توانایی شوالیه ، کماندار ، جلاد ، دارک نایت ، جادوگر ، پزشک و کیمیاگر را از گرداننده خواهد گرفت و رییس صومعه از آن توانایی استفاده خواهد کرد.اژدها در صورت بیرون رفتن رییس صومعه توانایی شب را خود انتخاب می کند."
    };
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "King BoardGame", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <div class="absolute inset-0 -z-10 overflow-hidden" data-astro-cid-j7pv25f6> <svg class="absolute top-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" data-astro-cid-j7pv25f6> <path fill="#4f46e5" fill-opacity="0.2" d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,160C420,139,480,85,540,64C600,43,660,53,720,96C780,139,840,213,900,213.3C960,213,1020,139,1080,96C1140,53,1200,43,1260,74.7C1320,107,1380,181,1410,218.7L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z" data-astro-cid-j7pv25f6></path> </svg> <svg class="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" data-astro-cid-j7pv25f6> <path fill="#4f46e5" fill-opacity="0.2" d="M0,224L30,202.7C60,181,120,139,180,133.3C240,128,300,160,360,192C420,224,480,256,540,234.7C600,213,660,139,720,128C780,117,840,171,900,181.3C960,192,1020,160,1080,144C1140,128,1200,128,1260,149.3C1320,171,1380,213,1410,234.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" data-astro-cid-j7pv25f6></path> </svg> </div> <h1 class="text-2xl sm:text-4xl font-bold tracking-wide drop-shadow-md" data-astro-cid-j7pv25f6>
Welcome To
<span class="text-yellow-500" data-astro-cid-j7pv25f6>King</span> <span class="text-purple-500" data-astro-cid-j7pv25f6>Game</span> </h1> <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:mx-12 gap-8" data-astro-cid-j7pv25f6> ${imageFiles.map(
    (image) => image !== "favicon.jpg" ? renderTemplate`${renderComponent($$result2, "GameCard", $$GameCard, { "title": image.replace(".jpg", "").replace("KART", "").replace("KING", ""), "description": findDescriptionForRole(image.replace(".jpg", "").replace("KART", "").replace("KING", ""))?.description, "imageSrc": image, "dayAbility": findDescriptionForRole(image.replace(".jpg", "").replace("KART", "").replace("KING", ""))?.day_ability, "nightAbility": findDescriptionForRole(image.replace(".jpg", "").replace("KART", "").replace("KING", ""))?.night_ability, "group": findDescriptionForRole(image.replace(".jpg", "").replace("KART", "").replace("KING", ""))?.group, "data-astro-cid-j7pv25f6": true })}` : null
  )} </div> </main> ` })} `;
}, "/home/john/Documents/projects/Farzan-Game/King-Game-Intro/src/pages/index.astro", void 0);
const $$file = "/home/john/Documents/projects/Farzan-Game/King-Game-Intro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
