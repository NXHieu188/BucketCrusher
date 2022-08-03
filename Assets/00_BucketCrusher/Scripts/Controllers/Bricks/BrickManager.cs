using UnityEngine;
using System;
using Random = UnityEngine.Random;
public enum Rarity
{
    Brick,
    Gold,
    Diamond
}
public class BrickManager : MonoBehaviour
{
    [HideInInspector] public Texture2D imageLoader;
    [SerializeField] private GameObject brickPrefab, brickHolder;
    [SerializeField] private Vector3 positionBrickHold;
    [SerializeField] private float brickSize;
    [SerializeField] private float brickScale;
    [SerializeField] private int brickHealth;
    [SerializeField] private int xOffset;
    public static Action<Rarity> onBrickDestroyed;

    public void Init()
    {
        brickPrefab.transform.localScale = Vector3.one * brickSize;
        CreateMap();
    }

    void CreateMap()
    {
        //ParsePNGToMap(LoadImage("Levels/feelsbadman"));
        ParsePNGToMap(imageLoader);
    }

    //private Texture2D LoadImage(string path)
    //{
    //Texture2D image = (Texture2D)Resources.Load(path);
    //byte[] pix = image.GetRawTextureData();
    //Texture2D readableTexture2D = new Texture2D(image.width, image.height, image.format, false);
    //readableTexture2D.LoadRawTextureData(pix);
    //readableTexture2D.Apply();
    //return readableTexture2D;
    //}

    private void ParsePNGToMap(Texture2D image)
    {
        for (int x = 0; x < image.width; ++x)
            for (int y = 0; y < image.height; ++y)
                CreateBrick(x, y, image.GetPixel(x, y));
        brickHolder.transform.position = positionBrickHold;
    }

    void CreateBrick(int x, int y, Color pixel)
    {
        // RETURN IF THE PIXEL IS UNCLEAR
        if ((int)pixel.a < 1)
            return;

        var go = Instantiate(brickPrefab, GetBrickLocation(x, y), Quaternion.identity);
        //#if UNITY_EDITOR
        go.transform.localScale = new Vector3(brickScale, brickScale, brickScale); //0.41f //0.58
        //        Debug.Log("a");
        //#endif
        //#if UNITY_LUNA
        //                go.transform.localScale = new Vector3(0.75f, 0.75f, 0.75f);
        //                  Debug.Log("b");
        //#endif
        go.transform.SetParent(brickHolder.transform);

        // TO MAKE BRICK MORE REALISTIC
        // RANDOM OFFSET COLOR 
        //var offset = Random.Range(0, 1) * -1 + Random.Range(0f, .15f);
        //go.GetComponent<SpriteRenderer>().color =
        // new Color(
        //     pixel.r + offset,
        //     pixel.g + offset,
        //     pixel.b + offset,
        //     1);
        go.GetComponent<MeshRenderer>().material.color =
            new Color(
                pixel.r,
                pixel.g,
                pixel.b,
                1);


        // RANDOM ANGLE
        //go.transform.eulerAngles = new Vector3(0, 0, Random.Range(-10f, 10f));

        // SET HP
        Brick brick = go.GetComponent<Brick>();
        brick.SetHp(brickHealth);
        GlobalInstance.Instance.gameManagerInstance.lstBrick.Add(brick);
    }

    Vector2 GetBrickLocation(int x, int y)
    {
        return new Vector2(x * brickSize + xOffset, y * brickSize);
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            foreach (Transform child in brickHolder.transform)
                Destroy(child.gameObject);
            CreateMap();
        }
    }

    private void OnDestroy()
    {
        brickPrefab.transform.localScale = Vector3.one;
    }
}
