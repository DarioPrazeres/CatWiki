using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using CatWiki.Models;
using Newtonsoft.Json.Linq;
using PagedList;
using PagedList.Mvc;

namespace CatWiki.Controllers
{
    public class HomeController : Controller
    {
        private readonly HttpClient _httpClient;
        private readonly HttpClient _httpClientImages;
        public HomeController()
        {
            _httpClient = new HttpClient();
            _httpClientImages = new HttpClient();
            _httpClient.BaseAddress = new Uri("https://api.thecatapi.com/v1/images/");
            _httpClientImages.BaseAddress = new Uri("https://api.thecatapi.com/v1/images/search?limit=8&");
        }
        public async Task<ActionResult> Index(int? numPag, int qtdItens = 10, string ordenarPor = "Decrescente", string pesq = "")
        {
            _httpClient.BaseAddress = new Uri("https://api.thecatapi.com/v1/");
            HttpResponseMessage response = await _httpClient.GetAsync("breeds");
            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadAsStringAsync();
                var breeds = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Breeds>>(data);

                foreach (var breed in breeds)
                {
                    string imperialWeight = breed.Weight.Imperial;
                    string metricWeight = breed.Weight.Metric;
                    string breedName = breed.name;
                }
                return View(breeds);
            }
            else
            {
                return View("Error");
            }
        }
        public async Task<ActionResult> Details(string id)
        {
            HttpResponseMessage response = await _httpClient.GetAsync(id);
            if (response.IsSuccessStatusCode)
            {
                string IdBreeds = "";
                var data = await response.Content.ReadAsStringAsync();
                var catApiResponse = Newtonsoft.Json.JsonConvert.DeserializeObject<Cat>(data);
                foreach (var breed in catApiResponse.Breeds)
                {
                    string Id = breed.id;
                    IdBreeds = Id;
                }
                response = await _httpClient.GetAsync("search?limit=8&breed_ids=" + IdBreeds);
                if (response.IsSuccessStatusCode)
                {
                    var dataImage = await response.Content.ReadAsStringAsync();
                    var Images = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Image>>(dataImage);

                    foreach (var Image in Images)
                    {
                        string IdImage = Image.id;
                        string UrlImage = Image.url;
                    }
                    ViewBag.ImageArray = Images;
                }                
                ViewBag.Breeds = catApiResponse.Breeds;                
                return View(catApiResponse);
            }
            else
            {
                return View("Error");
            }
            //Search more 8 Photos //https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=beng
        }

    }
}