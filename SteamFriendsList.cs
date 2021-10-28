using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;

namespace westeam
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
    public class Friend
    {
        public string steamid { get; set; }
        public string relationship { get; set; }
        public int friend_since { get; set; }
    }

    public class Friendslist
    {
        public List<Friend> friends { get; set; }
    }

    public class Root
    {
        public Friendslist friendslist { get; set; }
    }
}

