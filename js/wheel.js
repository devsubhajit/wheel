/* 
    Created on : Sep 11, 2014, 11:46:17 AM
    Author     : Subhajit
    Contact    : art.subhajit@gmail.com // for your advice and suggestions 
 */

jQuery(document).ready(function(event) {
    jQuery(".wheel-selector-inside").scroll(function() {
        ubee_wheel();
    });
    jQuery(".nbg-link").each(function() {
        var height = jQuery(this).parent().css("height");
        jQuery(this).css("height", height);
        jQuery(this.a).css("height", height);
        //jQuery(this).css("line-height",height);
    });
});
//------------------------------------------------------------------------------------------------------------------- wheel ::21/08/2014
function ubee_wheel()
{
    jQuery(".wheel-selector-inside").find("ul").find("li").each(function() {
        var childPos = jQuery(this).offset().top;
        var parentPos = jQuery(this).parent().parent().offset().top;
        //alert(parentPos);
        //var scrolPos = jQuery(this).parent().scrollTop();
        var childOffset = childPos - parentPos;//left: childPos.left - parentPos.left
        //childOffset = childOffset + 57;
        //alert(childOffset);
        var wheel_height = jQuery(this).height();
        //alert(wheel_height);
        //var top_pos = $(this).offset().top;
        //alert(childOffset+' childOffset, '+wheel_height+'wheel_height');
        if (childOffset >= 0 && childOffset <= wheel_height - 1)
        {
            jQuery(this).addClass("wheel-first");
            jQuery(this).removeClass("wheel-second");
            jQuery(this).removeClass("wheel-normal");
            //alert(1);
            //console.log(childOffset);
        }
        else if (childOffset >= wheel_height && childOffset <= wheel_height * 2 - 1)
        {
            jQuery(this).addClass("wheel-second");
            jQuery(this).removeClass("wheel-first");
            jQuery(this).removeClass("wheel-normal");
            //alert(2);
        }
        else if (childOffset >= wheel_height * 4 && childOffset <= wheel_height * 5 - 1)
        {
            jQuery(this).addClass("wheel-first");
            jQuery(this).removeClass("wheel-second");
            jQuery(this).removeClass("wheel-normal");
            //alert(3);
        }
        else if (childOffset >= wheel_height * 3 && childOffset <= wheel_height * 4 - 1)
        {
            jQuery(this).addClass("wheel-second");
            jQuery(this).removeClass("wheel-first");
            jQuery(this).removeClass("wheel-normal");
            //alert(4);
        }
        else
        {
            jQuery(this).addClass("wheel-normal");
            jQuery(this).removeClass("wheel-first");
            jQuery(this).removeClass("wheel-second");
            //alert(5);
        }
    });
}


