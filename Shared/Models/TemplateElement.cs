namespace DayMail.Shared.Models
{
    public class TemplateElement
    {
        public string Type { get; set; } = "Text"; // Text, Image, Button, etc.
        public string Content { get; set; } = "";
        public int Xpx { get; set; } = 100;
        public int Ypx { get; set; } = 100;
        public int WidthPx { get; set; } = 150;
        public int HeightPx { get; set; } = 50;
        public string? Link { get; set; }
    }
}
