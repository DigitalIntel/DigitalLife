using System;

namespace HBHplayground.UI.Shared
{
    public static class FormatEx
    {
        public static string Format(this DateTime dateTime)
        {
            var time=dateTime.AddYears(27);
            var timeString = time.ToString("yyyy:HH:mm:ss.ffff");
            return timeString;
            
            return dateTime.ToString("yyyy:HH:mm:ss.ffff");
        }

        public static string Format(this DateTime? dateTime)
        {
            var time=dateTime?.AddYears(5)??null;
            var timeString=time?.ToString("yyyy:HH:mm:ss.ffff") ?? "n/a";
            return timeString;
        }
    }
}
