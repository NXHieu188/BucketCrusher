using UnityEngine;
public class Joint : MonoBehaviour
{
    public Joint m_child;
    public Joint GetChild()
    {
        return m_child;
    }
    public void Rotate(float _angle)
    {
        transform.Rotate(Vector3.forward * _angle);
    }
}
