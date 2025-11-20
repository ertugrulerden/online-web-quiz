const chapter12 = {
    title: "YGA-Vize",
    description: "Yazılım Gereksinimi Vize Soruları",
    questions: [
        {
            question: "(DÇ1) Aşağıdakilerden hangisi gereksinim mühendisliği sürecinde gerçekleştirilmez?",
            options: [
                "Sistemin hizmet ve kısıtlamalarının belirlenmesi",
                "Sistemin hizmet ve kısıtlamalarının çözümlenmesi",
                "Sistemin hizmet ve kısıtlamalarının belgelendirilmesi",
                "Sistemin hizmet ve kısıtlamalarının fiyatlandırılması",
                "Sistemin hizmet ve kısıtlamalarının kontrol edilmesi"
            ],
            correct: 3,
            explanation: "Gereksinim mühendisliği sürecinde fiyatlandırma işlemi gerçekleştirilmez. Bu süreç gereksinimlerin belirlenmesi, çözümlenmesi, belgelendirilmesi ve kontrol edilmesi ile ilgilidir."
        },
        {
            question: "(DÇ1) Yazılım isterlerinin çözümlenmesi aşamasındaki aşağıdakilerden hangisi yapılmaz?",
            options: [
                "Yazılım proje ekibinin oluşturulur.",
                "Yazılım yaşam döngüsünün diğer adımları için temel oluşturulur.",
                "Gereksinimler açığa çıkarılır.",
                "Müşterinin yazılımdan beklentileri belirlenir.",
                "Yazılım gereksinimleri modellenir."
            ],
            correct: 0,
            explanation: "Yazılım proje ekibinin oluşturulması gereksinim çözümleme aşamasında değil, proje planlama aşamasında yapılır."
        },
        {
            question: "(DÇ2) Aşağıdakilerden hangisi sistem gereksinimlerinin okuyucularından biri değildir?",
            options: [
                "Sistemin son kullanıcıları",
                "Müşteri mühendisleri",
                "Müşteri yöneticileri",
                "Sistem mimarları",
                "Yazılım geliştiricileri"
            ],
            correct: 2,
            explanation: "Müşteri yöneticileri genellikle sistem gereksinimlerinin doğrudan okuyucuları değildir. Sistem gereksinimleri teknik bir dokümandır ve daha çok teknik ekipler tarafından okunur."
        },
        {
            question: "(DÇ5) Aşağıdakilerden hangisi fonksiyonel gereksinimlerin kapsamında değildir?",
            options: [
                "Sistemin yapmaması gerekenler",
                "Sistemin veri gösterimleri",
                "Sistemin sunması gereken servisler",
                "Sistemin girdilere tepkisi",
                "Sistemin belirli durumlardaki davranışı"
            ],
            correct: 1,
            explanation: "Sistemin veri gösterimleri kullanıcı arayüzü tasarımı ile ilgilidir ve fonksiyonel gereksinimlerin kapsamında değildir. Fonksiyonel gereksinimler sistemin ne yapması gerektiğini tanımlar."
        },
        {
            question: "(DÇ3) Aşağıdakilerden hangisi fonksiyonel olmayan gereksinimleri tanımlamada kullanılan ölçütlerden biri değildir?",
            options: [
                "Taşınabilirlik",
                "Tamlık",
                "Dayanıklılık",
                "Güvenilirlik",
                "Kullanım kolaylığı"
            ],
            correct: 1,
            explanation: "Tamlık, gereksinimlerin kalitesini değerlendirmek için kullanılan bir özelliktir ancak fonksiyonel olmayan gereksinimleri tanımlamada kullanılan bir ölçüt değildir."
        },
        {
            question: "(DÇ1) COCOMO81'de yazılımın aşağıdaki modellerden hangisi ile geliştirildiği kabul edilmiştir?",
            options: [
                "Barok Model",
                "V Model",
                "Spiral Model",
                "Evrimsel Model",
                "Şelale Model"
            ],
            correct: 4,
            explanation: "COCOMO81 (Constructive Cost Model 1981) yazılımın Şelale Model (Waterfall Model) ile geliştirildiği varsayımına dayanır."
        },
        {
            question: "(DÇ3) Aşağıdakilerin hangisinde mimari sonrası seviyede başlangıç tahminleri için kullanılan ürün özellikleri yanlış verilmiştir?",
            options: [
                "RELY: Sistem güvenirliliği",
                "DATA: Veritabanı büyüklüğü",
                "CPLX: Dil ve araç desteği",
                "DOCU: Gerekli belgeleri büyüklüğü",
                "RUSE: Yeniden kullanılabilen bileşenlerin yüzdesi"
            ],
            correct: 2,
            explanation: "CPLX (Complexity) karmaşıklık anlamına gelir, dil ve araç desteği değildir. Dil ve araç desteği için farklı bir parametre kullanılır."
        },
        {
            question: "(DÇ4) Personel ve donanım gereksinimlerinin çıkarıldığı, fizibilite çalışmalarının yapıldığı yazılım yaşam döngüsü adımı aşağıdakilerden hangisinde doğru verilmiştir?",
            options: [
                "Planlama",
                "Analiz",
                "Tasarım",
                "Gerçekleştirim",
                "Bakım"
            ],
            correct: 0,
            explanation: "Planlama aşamasında fizibilite çalışmaları yapılır ve personel ile donanım gereksinimleri belirlenir."
        },
        {
            question: "(DÇ3) Aşağıdakilerden hangisi yazılım fiyatlandırılmasını etkileyen faktörlerden değildir?",
            options: [
                "Sözleşme hükümleri",
                "Finansal sağlık",
                "Pazar fırsatı",
                "Müşteri katılımı",
                "Gereksinim değişkenliği"
            ],
            correct: 3,
            explanation: "Müşteri katılımı yazılım fiyatlandırmasını doğrudan etkileyen bir faktör değildir. Fiyatlandırma daha çok teknik ve ticari faktörlere bağlıdır."
        },
        {
            question: "(DÇ3) Aşağıdakilerden proje planının ek özelliklerinden biri değildir?",
            options: [
                "Kurulum planı",
                "Gereksinim planı",
                "Bakım planı",
                "Kalite planı",
                "Geçerleme planı"
            ],
            correct: 1,
            explanation: "Gereksinim planı proje planının ek özelliklerinden biri değildir. Gereksinimler zaten proje planının temel bileşenidir."
        },
        {
            question: "(DÇ3) Aşağıdakilerden hangisi proje planlama aşamasında yapılmaz?",
            options: [
                "Proje Kaynaklarının Belirlenmesi",
                "Proje Maliyetlerinin Kestirilmesi",
                "Projenin Test Edilmesi",
                "Proje Ekip Yapısının Oluşturulması",
                "Ayrıntılı Proje Planının Yapılması"
            ],
            correct: 2,
            explanation: "Projenin test edilmesi planlama aşamasında değil, gerçekleştirim ve test aşamalarında yapılır."
        },
        {
            question: "(DÇ4) Aşağıdakilerden hangisi proje maliyet kestirim yöntemlerinden biri değildir?",
            options: [
                "Projenin büyüklüğüne göre",
                "Projede çalışan sayısına göre",
                "Projenin uygulanış biçimine göre",
                "Değişik aşamalarda kullanılabilirliğine göre",
                "Yöntemlerin yapısına göre"
            ],
            correct: 2,
            explanation: "Projede çalışan sayısı maliyet kestirim yöntemlerinden biri değildir. Çalışan sayısı maliyetin bir sonucudur, kestirim yöntemi değildir."
        },
        {
            question: "(DÇ1) \"İşlev Noktaları Yöntemi\" yazılım yaşam döngüsünün hangi aşamasında kullanılır?",
            options: [
                "Planlama",
                "Analiz",
                "Tasarım",
                "Gerçekleştirim",
                "Bakım"
            ],
            correct: 0,
            explanation: "İşlev Noktaları Yöntemi (Function Point Analysis) proje planlama aşamasında maliyet ve süre tahmini için kullanılır."
        },
        {
            question: "(DÇ2) Aşağıdakilerden hangisi çevik yazılım ilkelerinden biri değildir?",
            options: [
                "Müşterinin katılımı",
                "Değişimin benimsenmesi",
                "Geliştirme takımı",
                "Artırımlı teslim",
                "Sadeliğin sürdürülmesi"
            ],
            correct: 2,
            explanation: "Geliştirme takımı çevik yazılım ilkelerinden biri değildir. Çevik ilkeler müşteri katılımı, değişimin benimsenmesi, artırımlı teslim ve sadelik gibi değerler üzerine kuruludur."
        },
        {
            question: "(DÇ1) Aşağıdakilerden hangisi Scrum'un faydalarından biri değildir?",
            options: [
                "Ürün anlaşılabilir ve yönetilebilir küçük parçalara bölünür.",
                "Bütün takım her şeyi görür ve takım iletişimi artar.",
                "Müşteri her küçük sürümün zamanında teslim edildiğini görür.",
                "Müşteri ve yazılım geliştirici arasında güven sağlanır.",
                "Doğrulama ve geçerleme erken aşamada vurgulanır."
            ],
            correct: 4,
            explanation: "Doğrulama ve geçerleme erken aşamada vurgulanması Scrum'un temel faydalarından biri değildir. Scrum daha çok esneklik, şeffaflık ve müşteri katılımı üzerine odaklanır."
        },
        {
            question: "(DÇ2) Aşağıdakilerden hangisi çevik yazılımın özelliklerinden biri değildir?",
            options: [
                "Spesifikasyon, tasarım ve uygulama süreçleri iç içe geçmiştir.",
                "Sistem bir dizi artım ile gerçekleştirilir.",
                "Geliştirme sürecini desteklemek için kapsamlı araç desteği alınır.",
                "Müşteriler geliştirme sürecine dâhil edilir.",
                "Belgeleme ayrı bir süreç olarak ele alınır."
            ],
            correct: 4,
            explanation: "Çevik yazılımda belgeleme ayrı bir süreç olarak ele alınmaz. Çevik yaklaşımda 'çalışan yazılım kapsamlı belgelmeden daha değerlidir' ilkesi vardır."
        },
        {
            question: "(DÇ3) Aşağıdakilerden hangisi organizasyonel gereksinimdir?",
            options: [
                "Yerleştirim gereksinimleri",
                "İşletimsel gereksinimler",
                "Finansal gereksinimler",
                "Performans gereksinimleri",
                "Kullanılabilirlik gereksinimleri"
            ],
            correct: 1,
            explanation: "İşletimsel gereksinimler organizasyonel gereksinimler kapsamındadır. Organizasyonel gereksinimler sistemin organizasyon içindeki kullanımı ile ilgilidir."
        },
        {
            question: "(DÇ3) \"Fazla miktarda fazla mesai, kod kalitesinde düşüşlere neden olacağı ve orta vadede üretkenliği azaltacağı için kabul edilebilir değildir.\" tanımı uç programlamanın aşağıdaki pratiklerinden hangisini açıklamaktadır?",
            options: [
                "Eş programlama",
                "Kodun yeniden üretilmesi",
                "Sade tasarım",
                "Küçük yayımlar",
                "Sürdürülebilir hız"
            ],
            correct: 4,
            explanation: "Bu tanım 'Sürdürülebilir Hız' (Sustainable Pace) pratiğini açıklamaktadır. Uç programlamada takımın uzun vadede sürdürülebilir bir çalışma temposu koruması önemlidir."
        },
        {
            question: "(DÇ3) Öngörülemeyen değişimlere zaman harcamak yerine refactoring (yeniden üretim) ile ilgilenen yazılım geliştirme modeli aşağıdakilerden hangisidir?",
            options: [
                "Gelişigüzel model",
                "Barok model",
                "V model",
                "Uç programlama",
                "Artırımsal model"
            ],
            correct: 3,
            explanation: "Uç programlama (Extreme Programming - XP) refactoring'i temel bir pratik olarak benimser. Kodun sürekli iyileştirilmesi ve yeniden düzenlenmesi XP'nin önemli özelliklerindendir."
        },
        {
            question: "(DÇ3) Aşağıdakilerden hangisi Eş programlamanın avantajlarından biridir?",
            options: [
                "Ürün, anlaşılabilir ve yönetilebilir küçük parçalara bölünür.",
                "Belirsiz gereksinimler süreci tıkamaz.",
                "Sistem sorumluluğunun ortak olarak alınmasını sağlar.",
                "Bütün takım her şeyi görür ve böylece takım iletişimi artar.",
                "Müşteri, her küçük sürümün zamanında teslim edildiğini görür."
            ],
            correct: 2,
            explanation: "Eş programlamanın (Pair Programming) avantajlarından biri, sistem sorumluluğunun ortak olarak alınmasını sağlamasıdır. İki geliştirici birlikte çalışarak kodun sahipliğini paylaşır."
        }
    ]
};

