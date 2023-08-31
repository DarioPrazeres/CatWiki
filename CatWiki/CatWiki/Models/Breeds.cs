using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CatWiki.Models
{            
    public class Breeds
    {
        [JsonProperty("id")]
        public string id { get; set; }
        [JsonProperty("name")]
        public string name { get; set; }
        public string description { get; set; }
        public string temperament { get; set; }
        public string origin { get; set; }
        public string life_span { get; set; }
        public int adaptability { get; set;}
        public int affection_level { get; set; }
        public int child_friendly { get; set; }
        public int grooming { get; set; }
        public int intelligence { get; set; }
        public int health_issues { get; set; }
        public int social_needs { get; set; }
        public int stranger_friendly { get; set; }
        public string reference_image_id { get; set; }
        public Weight Weight { get; set; }
    }
    public class Weight
    {
        public string Imperial { get; set; }
        public string Metric { get; set; }
    }
}