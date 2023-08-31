using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CatWiki.Models
{
    public class Cat
    {
        public string Id { get; set; }
        public string Url { get; set; }
        public List<Breeds> Breeds { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }
}