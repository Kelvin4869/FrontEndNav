(function ($) {
	$.fn.ssMenu = function (options) {

		var setting = $.extend({
			theme: "default", //put the name of theme in string       
			hideOnScroll: false, //true to hide menu while scroll down 
			additionalCSS: ({
				'background': '', //custom background color
				'color': '', //custom text color 
				'boxShadow': '', //to add box shadow 
				'textShadow': '', //to add text shadow 
			}),

		}, options);

		return this.each(function () {

			var target = $(this);

			var ssMenu = $(".navBar");

			var Triggers = $(ssMenu).find("li");


			//Applying customizations 

			$(target).addClass(setting.theme);

			$(target).css(setting.additionalCSS);


			$(Triggers).mouseenter(function () {


				//to avoid the adding classes again and again 
				if ($(ssMenu).hasClass("open")) {

					return;
				}

				$(ssMenu).addClass("open");


			});


			$(Window).click(function (e) {

				if ($(e.target).closest(Triggers).length) {

					return;

				}


				$(ssMenu).removeClass("open");


			});

			if (setting.hideOnScroll == true) {
				$(window).scroll(function () {


					if ($(this).scrollTop() > 50) {

						$(ssMenu).removeClass("show").addClass("hide");


					} else {

						$(ssMenu).removeClass("hide").addClass("show");


					}


				});

			}


		});
	};


	// 监听左侧导航栏事件
	$(document).ready(function () {

    $(".navBar").ssMenu();

	});
	
	// $.getJSON('../data/db.json', res => {
  //     console.log(res);
  //   }
  // )

})(jQuery);
